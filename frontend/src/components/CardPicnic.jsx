import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'
import axios from 'axios'

const CardPicnic = () => {
    const [picnics, setPicnics] = useState([])
    useEffect(()=>{
        const getPicnic = async() => {
            const response = await axios.get('http://localhost:1337/api/picnic-collections?populate=*')
            setPicnics(response.data.data)
        }
        getPicnic()
    }, [])
  return (
    <div>
        {picnics.slice(0,4).map((picnic)=>(
            <div key={picnic.id} className='flex flex-col lg:flex-row items-center my-8 gap-[21px] mx-2 lg:mx-0'>
                <img src={process.env.REACT_APP_BASE_URL + picnic.attributes.image.data[0].attributes.url} alt={picnic.attributes.title} className='w-[420px] h-[312px] lg:mb-0 rounded-2xl'/>
                <div className='font-workSans sm:w-[600px] sm:text-center lg:text-start lg:w-[749px] lg:mr-5'>
                    <p className='text-[49px] font-700 leading-[56px]'>{picnic.attributes.title}</p>
                    <p className='line-clamp-1 my-5 text-[20px] text-[#595959] font-500'>{picnic.attributes.content}</p>
                    <Link to={`/yesterday-picnic/${picnic.id}`} className='text-[#EC5151] font-500 text-[20px] duration-100 hover:opacity-75'>Read More</Link>
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