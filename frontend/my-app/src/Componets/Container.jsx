import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../App'

function Container({children}) {
    const{theme,toggleTheme}=useContext(ThemeContext)
  useEffect(()=>{
    document.body.style.backgroundColor=theme==="light"?"#000":"#fff"
  },[theme])
  
  return (
    <>
     <button onClick={toggleTheme}>Chnage Theme</button>
    {children}
   
    </>
  )
}

export default Container