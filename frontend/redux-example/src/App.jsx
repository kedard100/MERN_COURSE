import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'


import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={
      <PublicRoute>
        <Login/>        
         </PublicRoute>
        }/>
          <Route path="/home" element={
      <PublicRoute>
        <Home/>        
         </PublicRoute>
        }/>
      <Route path="/dashboard" element=
      {
        <PrivateRoute>
      <Dashboard/>
        </PrivateRoute>
       
        }/>
       
    </Routes>
    </>
  )
}

export default App
