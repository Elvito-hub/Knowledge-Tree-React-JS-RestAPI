import { result } from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import styles from '../../styles/result.css'


class ResultsPage extends React.Component{
    render(){
        return (
            <div className="resultbox">
                <h1>Congrats!</h1>
                <h2>You Scored {this.props.result}%</h2>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {result:state.result}
}

export default connect(mapStateToProps)(ResultsPage)