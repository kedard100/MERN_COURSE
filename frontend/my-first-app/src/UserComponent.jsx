import React, { useState } from 'react'

function UserComponent() {
    const [users,setUsers]=useState([
        {id:1,name:"kedar",age:25},
        {id:2,name:"kedar1",age:25},
        {id:3,name:"kedar3",age:25},
    ])
   
    const changeAge=(id)=>{
        console.log("user id",id)
        // setUsers(prvUsers=>
        //     prvUsers.map(user=>
        //         user.id===id ? {...user,age:user.age+1}:user
        //     )
        // )

        //const newUser=[...users]
      //  const newUser=[...users]
      const newUser=users


        for(let i=0;i<newUser.length;i++)
        {
            if(newUser[i].id===id)
            {
                newUser[i]={...newUser[i],age:newUser[i].age+1}
                break;
            }
        }
        console.log("newUser",newUser)
        setUsers(newUser)
    }
  return (
    <>
    {
        users.map(user=>(
            <>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button onClick={()=>changeAge(user.id)}>Submit</button>
            </>

        ))
    }
    </>
  )
}

export default UserComponent