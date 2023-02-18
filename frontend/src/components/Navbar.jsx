import React from 'react'
import {NavLink} from 'react-router-dom'
import { menu } from '../data'

const Navbar = () => {
  const activeLink = "border-b-[2px] border-[#EC5151] font-workSans mr-7 mx-2 text-[#262626] font-400 sm:mr-[61px] duration-75 hover:border-b-[2px] hover:border-[#EC5151]"
  const normalLink = "border-b-none font-workSans mr-7 mx-2 text-[#262626] font-400 sm:mr-[61px] duration-150 hover:opacity-50"
  return (
    <nav className='py-10 container sm:py-12'>
        {menu.map((menu, index) => (
            <NavLink key={index} to={menu.path} className={({isActive})=>isActive?activeLink:normalLink}>{menu.title}</NavLink>
        ))}
    </nav>
  )
}

export default Navbar