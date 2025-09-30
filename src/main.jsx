import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './components/About'
import AllProjects from './components/AllProjects'
import Contact from './components/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<AllProjects/>} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
