import { LOGOUT_USER, SET_USER } from "../actionTypes";

// export const setUser=(user)=>(
//     {
//         type:SET_USER,
//         payload:user

//     }
// )

export const setUser=()=>{

    return async(dispatch)=>{
        try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users/1')
            console.log("res data from api",res)

            const data=await res.json()

            dispatch({type:SET_USER,payload:data})
        }
        catch{}
    }
}
  


export const logoutUser=(user)=>(
    {
        type:LOGOUT_USER,
        //payload:user

    }
)