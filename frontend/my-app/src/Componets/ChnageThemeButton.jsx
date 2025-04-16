import React, { useEffect, useState } from 'react'

function ChangeThemeButton() {
     const[isDark,setTheme]=useState(true)
     useEffect(()=>{
       document.body.style.backgroundColor=isDark?"#fff" :"#333"
      },[isDark])
      const changeTheme=()=>{
        setTheme(!isDark)
         }
  return (
  <>
   <button onClick={changeTheme}>
   Change theme
    </button>
  </>
  )
}

export default ChangeThemeButton