import { createContext, useEffect, useState } from "react";

export const TodoContext=createContext({})

export const TodoProvider=({children})=>{

    const[todos,setTodoState]=useState(()=>{
        const savedTodos=localStorage.getItem("todos")
            return savedTodos?JSON.parse(savedTodos):[]
            
    })
   // const[todos,setTodoState]=useState([])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const setTodos=(text)=>{
        setTodoState([...todos,{id:Date.now(),text:text,isFinished:false}])
    }
    const deleteTodo=(id)=>{
        console.log("todo id",id)
setTodoState(todos.filter((todo)=>todo.id!=id))
    }
    const markAsFinished=(id)=>{
        const UpdateTodo=todos.map(todo=>(
            todo.id==id?{...todo,isFinished:!todo.isFinished}:todo
        ))
        setTodoState(UpdateTodo)
    }
    return(
        <TodoContext.Provider value={{todos,setTodos,deleteTodo,markAsFinished}}>
{children}

        </TodoContext.Provider>
    )
}