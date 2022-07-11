import React from 'react';
import {connect} from 'react-redux';
import {setResults,historySetter} from '../../actions/index';
import _ from 'lodash';
import styles from '../../styles/quiztime.css'

class QuizTimePage extends React.Component{
    state={
        questIndex:0,
        correctAnswers:0
    }
    judge=(option,correctA)=>{
        
        if(option==correctA){
            this.setState({correctAnswers:this.state.correctAnswers+1})
        }
        if(this.state.questIndex<this.props.questions.length-1){
           
        this.setState({questIndex:this.state.questIndex+1})
        }else{
            
            const result=(this.state.correctAnswers*100)/this.props.questions.length;
            this.props.setResults(result.toFixed(2));
            if(this.props.auth.isUserSignedIn){
                const d= new Date();
                const curtime= d.toLocaleString();
                const histObj={
                    userId:this.props.auth.userId,
                    time:curtime,
                    category:this.props.questions[0].category,
                    difficulty:this.props.questions[0].difficulty,
                    score:`${result}%`
                }
                console.log(histObj);
                this.props.historySetter(histObj);

            }
        }
    }
    renderOptions=(options,correctA)=>{
        const renderedopt = options.map((option)=>{
            return (
                <div onClick={()=>this.judge(option,correctA)} className="item">
            <h3>{option}</h3>
            </div>
            )
        })
        return renderedopt;
    }
    renderQuestion=(question)=>{

        const choices=_.concat(question.incorrect_answers,question.correct_answer);
        _.shuffle(choices);
        
        return(
            <div>
                <h2>{question.question}</h2>
                <p>Correct Answers: {this.state.correctAnswers}/{this.state.questIndex}</p>
                <div className="options">
                {this.renderOptions(choices,question.correct_answer)}
                </div>
            </div>
        )
        
    }
    render(){
        
        if(_.isEmpty(this.props.questions)){
            return(
                <div>Loading....</div>
            )
        }
            return (
                <div className="quizbox">
                {this.renderQuestion(this.props.questions[this.state.questIndex])}
            </div>
            )
        
    }
}
const mapStateToProps=(state)=>{
    return (
    {questions:state.questions,
        auth:state.auth
    }
    )
}
export default connect(mapStateToProps,{setResults,historySetter})(QuizTimePage);