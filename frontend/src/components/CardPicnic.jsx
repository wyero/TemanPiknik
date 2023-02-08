import React from 'react'
import { Link } from 'react-router-dom'
import { picnic1 } from '../assets/image'
import {FiChevronLeft} from 'react-icons/fi'

const CardPicnic = () => {
    const itemsPicnic = [
        {image: picnic1, title: "Keseruan Piknik di Taman Kota, Jakarta", desc: "Ini adalah deskripsi untuk artikel dari post. maksimal 100 characters", link: "https://google.com"},
        {image: picnic1, title: "Keseruan Piknik di Taman Kota, Jakarta", desc: "Ini adalah deskripsi untuk artikel dari post. maksimal 100 characters", link: "https://google.com"},
        {image: picnic1, title: "Keseruan Piknik di Taman Kota, Jakarta", desc: "Ini adalah deskripsi untuk artikel dari post. maksimal 100 characters", link: "https://google.com"},
        {image: picnic1, title: "Keseruan Piknik di Taman Kota, Jakarta", desc: "Ini adalah deskripsi untuk artikel dari post. maksimal 100 characters", link: "https://google.com"},
        {image: picnic1, title: "Keseruan Piknik di Taman Kota, Jakarta", desc: "Ini adalah deskripsi untuk artikel dari post. maksimal 100 characters", link: "https://google.com"},
    ]
  return (
    <div>
        {itemsPicnic.slice(0,4).map((itemsPicnic, index)=>(
            <div key={index} className='flex flex-col lg:flex-row items-center my-8 gap-[21px] mx-2 lg:mx-0'>
                <img src={itemsPicnic.image} alt={itemsPicnic.image} className='w-[420px] h-[312px] lg:mb-0'/>
                <div className='font-workSans sm:w-[600px] sm:text-center lg:text-start lg:w-[749px] lg:mr-5'>
                    <p className='text-[49px] font-700 leading-[56px]'>{itemsPicnic.title}</p>
                    <p className='line-clamp-1 my-5 text-[20px] text-[#595959] font-500'>{itemsPicnic.desc}</p>
                    <Link to={itemsPicnic.link} className='text-[#EC5151] font-500 text-[20px]'>Read More</Link>
                </div>
            </div>
        ))}
        <div className='mt-12 flex items-center justify-center font-workSans text-[20px] font-500 gap-7 cursor-pointer'>
            <FiChevronLeft/>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>...</div>
            <FiChevronLeft className='rotate-180'/>
        </div>
    </div>
  )
}

export default CardPicnic