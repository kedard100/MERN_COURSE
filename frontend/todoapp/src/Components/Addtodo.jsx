import React, { useContext, useState } from 'react'
import Displaytodo from './Displaytodo'
import { TodoContext } from '../Context/TodoContext'

function Addtodo() {
   const{todos,setTodos}=useContext(TodoContext)
   const[todoText,setTodoText]=useState("")
   const handleSubmit=()=>{
    setTodos(todoText)
   }
  return (
   <>
   <input type="text"
    value={todoText}
    onChange={(e)=>setTodoText(e.target.value)}      
   />
   <button onClick={handleSubmit}>Submit todo</button>
  
   </>
  )
}

export default Addtodo