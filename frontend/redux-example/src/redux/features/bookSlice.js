import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState={
    books:[],
    filter:"ALL"
}

const bookSlice=createSlice({
    name:"book",
    initialState,
    reducers:{
        addBook:(state,action)=>{
            state.books.push({...action.payload,id:nanoid()})
        },
        deleteBook:(state,action)=>{
            state.books=state.books.filter(book=>book.id!==action.payload)
        },
        setFilter:(state,action)=>{
            state.filter=action.payload;
        }
    }
});

export const{addBook,deleteBook,setFilter}=bookSlice.actions;
export default bookSlice.reducer;