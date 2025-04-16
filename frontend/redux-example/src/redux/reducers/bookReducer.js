import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "../actionTypes"

const initialState={
    books:[],
    filter:"ALL"
}

export const bookReducer=(state=initialState,action)=>{
console.log("action.payload",action.payload)
console.log("action.type",action.type)
    switch(action.type)
    {
        case ADD_BOOK:
            {
                return{
                    ...state,
                    books:[...state.books,action.payload]
                }
            };
            case DELETE_BOOK:
                return{
                    ...state,
                    books:state.books.filter(book=>book.id!==action.payload)
                };

                case SET_FILTER:return{
                    ...state,
                    filter:action.payload
                }
            default:
                return state
    }
}