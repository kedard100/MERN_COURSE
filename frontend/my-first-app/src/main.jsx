import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './MyComponent.jsx'
import UserComponent from './UserComponent.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <MyComponent/> */}
    <UserComponent/>
  </>,
)
