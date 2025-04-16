import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import '../assets/MyStyles.module.css'

function Displaytodo() {
       const{todos,deleteTodo,markAsFinished}=useContext(TodoContext)
    
    console.log("todos value",todos)
  return (
  <>
 
 <table className='table'>
    <tr>
        <th className='th'>
            Todo
        </th>
        <th className='th'>
            Is Done
        </th>
        <th className='th'>
            Update Status
        </th>
        <th className='th'>
            Delete
        </th>
      
    </tr>
   {
   todos.map((todoList)=>{
    console.log("todoList",todoList)
    return(
<tr>
    <td className='th'>{todoList.text}</td>
    <td className='td'>{todoList.isFinished?"Done":"Pending"}</td>
    <td className='td'>
        <button onClick={()=>markAsFinished(todoList.id)} 
        style={{backgroundColor:"yellow"}}>
            {todoList.isFinished?"Mark as pending":"Mark as finished"}
            </button>
        </td>
    <td className='td'>
        <button onClick={()=>deleteTodo(todoList.id)} style={{backgroundColor:"red",color:"white"}}>Delete Todo</button>
        </td>
       

</tr>
    )
   }) }
   </table>
 
  </>
  )
}

export default Displaytodo