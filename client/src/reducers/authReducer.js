const INTIAL_STATE={
    isUserSignedIn:null,
    userId:null
}

export default (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return {...state,isUserSignedIn:true,userId:action.payload}
        case 'SIGN_OUT':
            return {...state,isUserSignedIn:false,userId:null}
        default:
            return state;
    }
}