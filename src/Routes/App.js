
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Appart from '../Pages/Appart/Appart'
import Error from '../Pages/Error/Error'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path= "/Appart/:id" element={<Appart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    
  )
}

export default App;