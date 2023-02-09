import React from 'react'
import {Link} from 'react-router-dom'
import { menu } from '../data'

const Navbar = () => {
  return (
    <nav className='py-10 container sm:py-12'>
        {menu.map((menu, index) => (
            <Link key={index} to={menu.path} className='font-workSans mr-7 mx-2 text-[#262626] font-400 sm:mr-[61px]'>{menu.title}</Link>
        ))}
    </nav>
  )
}

export default Navbar