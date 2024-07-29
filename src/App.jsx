import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Gallery, Home, Projects, Services } from './pages'
import { Footer, Navbar, ScrollToTop } from './components'
import styles from './style'



const App = () => {
  return (
   <div>
   <Navbar />
   <ScrollToTop />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/services' element={<Projects />} />
    <Route path='/services' element={<Gallery />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Home />} />
   </Routes>
   <Footer />
   </div>
  )
}

export default App