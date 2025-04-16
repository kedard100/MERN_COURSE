import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Componets/Navbar'

export const ThemeContext=createContext({
    theme:"light",
    toggleTheme:()=>{},
    todos:[{text:"initial"}],
    setTodos:()=>{}
})
// export const ThemeContext=createContext({})
function App() {

   const[theme,setTheme]=useState("dark")
  const[todos,setTodosState]=useState([{text:"initial"}])
 const toggleTheme=()=>{
 
  setTheme((prvTheme)=>(prvTheme==="light"?"dark":"light"))
 }
 const setTodos=(text)=>{
  console.log("get text value inside setTodo",text)
setTodosState([...todos,{id:Date.now(),text:text,completed:false}])
 }

  
  return (
    <>
    <Navbar/>
  <ThemeContext.Provider value={{theme,toggleTheme,todos,setTodos}}>
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />

     </Routes>

  </ThemeContext.Provider>
     
    
    </>
  )
}

export default App
