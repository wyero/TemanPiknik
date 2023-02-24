import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AboutContent, BannerAbout, CardTeam, Contact, Footer, Navbar } from '../../components'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {RiFacebookCircleLine} from 'react-icons/ri'

const About = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        const getTeam = async() => {
            const response = await axios.get('http://localhost:1337/api/teams?populate=*')
            setTeams(response.data.data)
        }
        getTeam()
    }, [])
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <BannerAbout/>
        <div className='mt-[66px]'>
            <hr className='bg-[#BFBFBF] mb-20 container '/>
            <AboutContent/>
            <div className='mt-16 md:mt-[127px] mb-[114px] container'>
                <p className='font-workSans font-700 text-[49px] text-center text-[#262626] mb-10'>Our <span className='text-[#EC5151]'>Team</span></p>
                <div className='flex flex-wrap justify-evenly gap-y-[88px] mx-2'>
                    {teams.slice(0,6).map((team)=>{
                        return(
                            <CardTeam key={team.id} team={team}/>
                        )
                    })}
                </div> 
                <div className='text-center capitalize relative top-10 text-[#EC5151] font-500 font-workSans'>
                    <Link to='/teams' className='duration-150 hover:opacity-50 '>view all</Link>
                </div>
            </div>
            <div className='relative mb-10 md:mb-[550px] lg:mb-[400px]'>
                <div className='bg-[#FFA2A2]'>
                    <div className='md:ml-[69px] flex flex-col md:flex-row'>
                        <div className='font-workSans text-center md:text-start text-white md:w-[421px] py-6'>
                            <p className='font-700 text-[49px] leading-[56px] mb-4'>Mari Berbincang Bersama Kami</p>
                            <p className='font-400 text-[20px] leading-7'>Sekedar say Hi, bisa menghasilkan percakapan bermakna</p>
                            <div className='flex items-center justify-center md:justify-start gap-[27.76px] mt-[30px]'>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram className='text-[36.67px]'/></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><BsWhatsapp className='text-[36.67px]'/></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><RiFacebookCircleLine className='text-[42px]'/></a>
                            </div>
                        </div>
                        <div className='md:absolute md:left-[290px] md:top-56 lg:left-[550px] lg:top-10 2xl:left-[700px]'>
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About