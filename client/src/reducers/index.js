import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import quiztypeReducer from './quiztypeReducer';
import quizquestReducer from './quizquestReducer';
import resultReducer from './resultReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    auth:authReducer,
    quiztype:quiztypeReducer,
    form:formReducer,
    questions:quizquestReducer,
    result:resultReducer,
    historyres:historyReducer
})