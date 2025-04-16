import React, { useEffect, useState } from 'react'
import MyNewComponent from './MyNewComponent'

function MyComponent() {
   // let username="abc"
  //  useEffect(()=>{
  //   console.log("inside useeffect of state")
  //  },[count])
  
  //  useEffect(()=>{
  //   console.log("inside onload")
  //  },[])
  
  const[user,setUser]=useState({name:"kedar",age:"25"})
    
  const [count,setCount]=useState(0)  
 

  const handleSubmit=()=>{
setCount(count+1)

console.log("count",count)
  }
  const handleSubmitForUser=()=>{
//setUser({email:'abc'})
//setUser({age:"26"})
user.age="26"
//setUser(user)
//setCount(1)
setUser((prev)=>({...prev,age:"26"})) //shallo copy
  }


  return (
   <>
   {/* <div>This is My component</div> */}
   {/* <MyNewComponent username_test={username} email={"kd@gmail.com"}/>  */}
   {/* <button onClick={handleSubmit}>Count {count} </button> */}
   <button onClick={handleSubmitForUser}>user click </button>
   <div>{user.name} {user.age} {user.email}</div>

   </>
  )
}

export default MyComponent