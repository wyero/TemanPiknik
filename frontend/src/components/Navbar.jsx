import React from 'react'
import {Link} from 'react-router-dom'
import { menu } from '../data'

const Navbar = () => {
  return (
    <nav className='py-10 mx-1 sm:mx-70 sm:py-12'>
        {menu.map((menu, index) => (
            <Link key={index} to={menu.path} className='font-workSans mr-7 text-[#262626] font-400 sm:mr-[61px]'>{menu.title}</Link>
        ))}
    </nav>
  )
}

export default Navbar