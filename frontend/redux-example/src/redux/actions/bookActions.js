import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "../actionTypes";


export const addBook=(book)=>(
    {
        type:ADD_BOOK,
        payload:book
    }
)

export const deleteBook=(id)=>({
    type:DELETE_BOOK,
    payload:id,
})

export const setFilter=(catergory)=>({
    type:SET_FILTER,
    payload:catergory
})