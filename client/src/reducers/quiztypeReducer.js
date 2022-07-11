export default (state='',action)=>{
    switch(action.type){
        case 'QUIZ_TYPE':
            return action.payload;
        default:
            return state;
    }
}