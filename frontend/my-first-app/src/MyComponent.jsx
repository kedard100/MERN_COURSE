import React, { useEffect, useState } from 'react'
import MyNewComponent from './MyNewComponent'

function MyComponent() {
   // let username="abc"
  const[username,setUsername]=useState("Kedar state variable")
    
  const [count,setCount]=useState(0)

  console.log("Component mounted")

  const handleSubmit=()=>{
setCount(count+1)
console.log("count",count)
  }

  return (
   <>
   <div>This is My component</div>
   {/* <MyNewComponent username_test={username} email={"kd@gmail.com"}/>  */}
   <button onClick={handleSubmit}>Count {count} </button>
   </>
  )
}

export default MyComponent