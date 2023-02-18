import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CardTeam, Contact, Footer, Navbar } from '../../components'
import { content } from '../../data'
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
        <div className='bg-bgAbout w-full h-[497px] bg-no-repeat bg-cover'>
            <div className='bg-[#FFA2A2] rounded-r-2xl md:w-[710px] relative top-[330px] sm:top-[380px] lg:top-80'>
                <p className='md:w-[700px] p-1 lg:py-[88px] lg:pl-[70px] lg:pr-[90px] text-white font-workSans text-[50px] sm:text-[61px] leading-[72px] font-700'>Belum Kenal Maka Tak Sayang.</p>
            </div>
        </div>
        <p className='font-workSans sm:w-[492px] font-500 text-[20px] px-1 lg:px-0 ml-auto mt-[80px] sm:mt-[84px] lg:mt-[160px] xl:mt-[84px] xl:mr-1 2xl:mr-[100px]'>Berharganya makna sebuah perkenalan demi hubungan pertemanan. Mari kenalan dengan teman-teman dari Teman Piknikmu yang akan menemani piknik kalian di hari libur yang cerah dan menghilangkan suntuknya beban pekerjaan.</p>
        <div className='mt-[66px]'>
            <hr className='bg-[#BFBFBF] mb-20 container '/>
            {content.map((content, index)=>(
                <div key={index} className='flex flex-col items-center justify-between xl:flex-row xl:items-start text-[#595959] gap-7 container'>
                    <div className='hidden xl:block w-[310px] mx-2 h-[281px] bg-[#FFE0E0] rounded-2xl'></div>
                    <div className='md:w-[248px] text-center flex flex-col items-center xl:text-start'>
                        <p className='text-[49px] font-700 mb-1 xl:mb-5 text-[#262626]'>{content.title}</p>
                        <div className='xl:hidden w-[310px] h-[281px] mx-2 bg-[#FFE0E0] rounded-2xl'></div>
                        <p className='text-xl font-500 leading-7'>{content.desc1}</p>
                    </div>
                    <div className='flex  flex-wrap gap-7 mx-2 text-justify lg:text-start justify-between xl:w-[276px]'> 
                        <div className='font-400 leading-5 sm:w-[276px] mr-[30px]'>
                            <p>{content.desc2}</p>
                            <p className='mt-6'>{content.desc3}</p>
                        </div>
                        <div className='sm:w-[276px]'>
                            <p>{content.desc4}</p>
                            <p className='mt-6'>{content.desc5}</p>
                        </div>
                    </div>
                </div>
            ))}
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