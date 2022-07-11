export default (state=null,action)=>{
    switch(action.type){
        case 'TOTAL_MARK':
            console.log(action.payload);
            return action.payload
        default:
            return state;
    }
}