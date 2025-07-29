import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
