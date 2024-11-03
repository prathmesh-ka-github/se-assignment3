import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Landingpage from './Landingpage'
import About from './pages/About'
import Bag from './pages/Bag.jsx'
import Collections from './pages/Collections.jsx'
import Wishlist from './pages/Wishlist.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (  
    <Router>

        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Landingpage/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/bag' element={<Bag/>}></Route>
            <Route exact path='/collections' element={<Collections/>}></Route>
            <Route exact path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>

        {/* <Footer/> */}

    </Router>
  )
}

export default App
