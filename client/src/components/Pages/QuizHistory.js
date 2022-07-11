import React from 'react';
import {connect} from 'react-redux';
import {fetchHistory} from '../../actions/index';
class QuizHistory extends React.Component{
    componentDidMount(){
        this.props.fetchHistory()
    }

    render(){
        console.log(this.props.histres)
        const renderedRes= this.props.histres.map((item)=>{
            return(
            <tr>
            <td data-label="UserId">{item.userId}</td>
            <td data-label="Quiz Time">{item.time}</td>
            <td data-label="Category">{item.category}</td>
            <td data-label="Difficulty">{item.difficulty}</td>
            <td data-label="Score">{item.score}</td>
          </tr>
        )
        })
        if(this.props.auth.isUserSignedIn){
        return (
            <div style={{position:'absolute', top:'20vh',left:'10vw'}} className="ui container">
                <table class="ui celled table">
                  <thead>
                  <tr><th>UserId</th>
                  <th>Quiz Time</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Score</th>
                  </tr></thead>
                 <tbody>
                     {renderedRes}
                 </tbody>
                 </table>
            </div>
        )
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        histres:state.historyres,
        auth:state.auth
    }
}
export default connect(mapStateToProps,{fetchHistory})(QuizHistory)