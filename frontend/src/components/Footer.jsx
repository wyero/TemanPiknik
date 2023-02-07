import React from 'react'
import { temanPiknik, logoSalt } from '../assets/image'
import { menuFooter } from '../data'
import { Link } from 'react-router-dom'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-[#F7F7F7] p-[70px]'>
        <div className='flex justify-between gap-7 flex-wrap font-workSans font-400 text-[#595959] 2xl:justify-start'>
            <div className=''>
                <img src={temanPiknik} alt={temanPiknik} className='w-[305px] h-[84px] mb-[17px]'/>
                <div className='ml-[52.5px]'>
                    <p className='text-[10px] mb-[7px]'>Collaboration with</p>
                    <div className='flex items-center'>
                        <img src={logoSalt} alt={logoSalt} className='w-[60px] h-[60px]'/>
                        <p className='font-500 text-[14px]'>Salt Academy</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-[10px] 2xl:ml-[33px] 2xl:mr-[320px] sm:w-[310px]'>
                <p className='leading-[14px] mb-[27px]'>Lorem ipsum dolor sit amet consectetur. Aliquam commodo arcu nulla purus vulputate volutpat tellus pellentesque. Ultrices habitant ut sed et sed mauris nulla in tempor. Diam cras tellus egestas ultrices cras.</p>
                <div>
                    <p>Jakarta, Indonesia</p>
                    <p>+86 123 456 7890</p>
                    <p>email@temanpiknik.com</p>
                </div>
            </div>
            <div className='2xl:w-[131px] 2xl:mr-[89px]'>
                <p className='text-[20px] text-[#EC5151] font-500 mb-4'>Teman Piknik</p>
                <div className='flex flex-col text-[14px]'>
                {menuFooter.map((menuFooter, index) => (
                    <Link key={index} to={menuFooter.path} className='my-2'>{menuFooter.title}</Link>
                ))}
                </div>
            </div>
            <div>
                <p className='text-[20px] text-[#EC5151] font-500 mb-4'>Follow Us</p>
                <div className='flex items-center text-[20px] gap-[27.54px]'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                </div>
            </div>
        </div>
        <p className='text-center font-workSans font-400 text-[10px] text-[#595959] mt-[21px]'>Powered by SALT Academy</p>
    </footer>
  )
}

export default Footer