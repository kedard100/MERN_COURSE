import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'

function TodoForm() {
 const{setTodos}=useContext(ThemeContext)
 const[text,setText]=useState("")

 const handleSubmit=()=>{
   // console.log("value of text",text)
    setTodos(text)
 }
  return (
    <div>
<input 
type="text"
onChange={(e)=>setText(e.target.value)}


/>
<button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TodoForm