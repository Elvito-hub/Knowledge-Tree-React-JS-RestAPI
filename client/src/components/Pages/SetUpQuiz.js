import React from 'react';
import { connect } from 'react-redux';
import { Field, formValues, reduxForm } from 'redux-form';
import styles from '../../styles/setupquiz.css';
import _ from 'lodash';
import { fetchQuiz } from '../../actions/index';

class SetUpQuiz extends React.Component {

    renderError({ error, touched }) {
        console.log(error);
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderField = ({
        input,
        label,
        type,
        meta
    }) => {
        return (
            <div>
                <label><h3>{label}</h3></label>
                <div>
                    <input {...input} type={type} />
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log("here");
        this.props.fetchQuiz(formValues);
    }


    render() {
        let options = ['Geography', 'History', 'Music', 'Movies', 'Sports'];
        options = _.concat(this.props.quiztype, options);
        let newOp = _.uniq(options);

        return (
            <div>

                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="setquizbox">
                    <h1>Set Up Quiz</h1>
                    <div className="formbox">
                        <div className="item">
                            <Field
                                type="number"
                                name='questnumber'
                                component={this.renderField}
                                label="Number Of Questions"
                            />
                        </div>
                        <div className="item">
                            <label><h3>Category</h3></label>
                            <Field
                                name="category"
                                label="Category"
                                component="select"
                            >
                                <option value={newOp[0]}>{newOp[0]}</option>
                                <option value={newOp[1]}>{newOp[1]}</option>
                                <option value={newOp[2]}>{newOp[2]}</option>
                                <option value={newOp[3]}>{newOp[3]}</option>
                                <option value={newOp[4]}>{newOp[4]}</option>

                            </Field>
                        </div>
                        <div className="item">
                            <label><h3>Difficulty</h3></label>
                            <Field

                                name="difficulty"
                                label="Difficulty"
                                component="select">
                                <option />
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>

                            </Field>
                        </div>
                        <button style={{ fontSize: '1rem' }} class="ui teal button keybt">Start</button>
                    </div>
                </form>
            </div>
        )
    }
}
const validate = (formValues, mapStateToProps) => {

    const errors = {};
    if (!formValues.questnumber || formValues.questnumber > 19 || formValues.questnumber < 0) {
        errors.questnumber = 'You must enter number of questions less than 19'
    }
    formValues.category = mapStateToProps.quiztype;

    if (!formValues.category) {
        errors.category = "You must enter the category"
    }
    if (!formValues.difficulty) {
        errors.difficulty = "You must enter difficulty level"
    }
    return errors;
}
const formWrapped = reduxForm({
    form: 'quizsetupform',
    validate

})(SetUpQuiz)
const mapStateToProps = (state) => {
    return { quiztype: state.quiztype }
}

export default connect(mapStateToProps, { fetchQuiz })(formWrapped);