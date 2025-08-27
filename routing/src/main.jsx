import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import './index.css'
import { services } from './App.jsx'
import { About } from './App.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   < BrowserRouter>
    <Routes>
 <Route path='/' element={<App/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/services' element={<services/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
