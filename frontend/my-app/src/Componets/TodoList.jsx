import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function TodoList() {
     const{todos}=useContext(ThemeContext)
    
  return (
   <>
   {
    todos.map(todo=>{
        console.log("todo",todo)
        
        return(
        <li>

            {todo.text}
        </li>
    )})
   }
   </>
  )
}

export default TodoList