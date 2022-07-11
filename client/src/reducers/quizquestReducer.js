
export default (state=[],action)=>{
    switch(action.type){
        case 'FETCHED_QUIZ':
            
            return action.payload
        default:
            return state;
    }
}