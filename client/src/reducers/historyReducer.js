export default (state=[],action)=>{
    switch(action.type){
        case 'SET_RESULT_TO_HISTORY':
            console.log(state);
            return [...state,action.payload];
        case 'FETCHED_HISTORY':
            return action.payload
        default:
            return state
    }
}