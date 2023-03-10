import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, About, Picnic, DetailPicnic, Article, Team } from '../pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/yesterday-picnic' element={<Picnic/>}/>
            <Route path='/event/:slug' element={<DetailPicnic/>}/>
            <Route path='/yesterday-picnic/:id' element={<Article/>}/>
            <Route path='/teams' element={<Team/>}/>
        </Routes>
    </Router>
  )
}

export default Routing