import { LOGOUT_USER, SET_USER } from "../actionTypes"

const initialState={
    isLogedin:false,
    user:null

}

export const userReducer=(state=initialState,action)=>{

    switch(action.type){
        case SET_USER:
            return{
                ...state,
                isLogedin:true,
                user:action.payload
            };

            case LOGOUT_USER:
                return{
                    ...state,
                    isLogedin:false,
                    user:null
                };

                default:
                    return state;
    }

}