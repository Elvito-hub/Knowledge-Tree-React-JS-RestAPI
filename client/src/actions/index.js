import { formValues } from 'redux-form';
import history from '../history';
import triviadb from '../apis/triviadb';
import historyres from '../apis/historyres';
export const signInInfoGetter = (userId) => {
    return { type: 'SIGN_IN', payload: userId }
}

export const signOutInfoGetter = () => {
    history.push('/');
    return { type: 'SIGN_OUT' }
}

export const typeselect = (type) => {
    history.push('/setupquiz');
    return { type: 'QUIZ_TYPE', payload: type }
}

export const fetchQuiz = (formValues) => {
    console.log(formValues);

    return async (dispatch) => {
        switch (formValues.category) {
            case 'History':
                formValues.category = 23
                break;
            case 'Geography':
                formValues.category = 22
                break;
            case 'Music':
                formValues.category = 12
                break;
            case 'Movies':
                formValues.category = 11
                break;
            case 'Sports':
                formValues.category = 21
                break;
        }
        const response = await triviadb.get('', {
            params: {
                amount: formValues.questnumber,
                category: formValues.category,
                difficulty: formValues.difficulty
            }
        })
        history.push("/quiztime")
        dispatch({ type: 'FETCHED_QUIZ', payload: response.data.results })

    }

}

export const setResults = (total) => {
    history.push('/result')
    return { type: 'TOTAL_MARK', payload: total }
}


export const historySetter = (histObj) => {
    return async (dispatch) => {
        const response = await historyres.post('/historyres', { ...histObj })
        dispatch({ type: 'SET_RESULT_TO_HISTORY', payload: response.data })
    }
}


export const fetchHistory = () => {
    return async (dispatch) => {
        const response = await historyres.get('/historyres')
        dispatch({ type: 'FETCHED_HISTORY', payload: response.data })
    }
}