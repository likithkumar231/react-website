import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Error from './pages/Error'
import Navbar from './Navbar'
import Footer from './Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact to path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

