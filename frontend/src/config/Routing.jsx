import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, About, Picnic, DetailPicnic } from '../pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/picnic' element={<Picnic/>}/>
            <Route path='/detail-picnic' element={<DetailPicnic/>}/>
        </Routes>
    </Router>
  )
}

export default Routing