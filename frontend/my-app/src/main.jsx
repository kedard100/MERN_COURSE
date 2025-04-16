import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './MyComponent.jsx'
import DomManualExample from './DomManualExample.jsx'
import Navbar from './Componets/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    
  // </StrictMode>,
)
