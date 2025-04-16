//const { createSlice } = require("@reduxjs/toolkit")
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    email:"",
    isLoggedin:false,
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const{name,email}=action.payload;
            state.name=name;
            state.email=email;
            state.isLoggedin=true
        },
        loggoutUser:(state)=>{
            state.name="",
            state.email="",
            state.isLoggedin=false
        }
    }
})

export const{setUser,loggoutUser}=userSlice.actions;
export default userSlice.reducer