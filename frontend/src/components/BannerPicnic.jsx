import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BannerPicnic = () => {
    const [banner, setBanner] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getBanner = async() => {
            const response = await axios.get('http://localhost:1337/api/yesterday-picnic?populate=*')
            setBanner(response.data.data)
            setLoading(false)
        }
        getBanner() 
    }, [])
    if(loading) return ""
  if(banner !== 0) return (
    <div style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL + banner.attributes.banner.data.attributes.url})`}} className='bg-bgPicnic w-full h-[497px] bg-no-repeat bg-cover'>
        <div className='bg-[#FFA2A2] rounded-r-2xl sm:w-[450px] md:w-[522px] relative top-[350px] sm:top-[380px] lg:top-80'>
            <p className='sm:p-2 md:w-[522px] lg:w-[700px] p-1 lg:py-[88px] lg:pl-[70px] lg:pr-[90px] text-white font-workSans text-[50px] sm:text-[61px] leading-[72px] font-700'>{banner.attributes.title}</p>
        </div>
    </div>
  )
}

export default BannerPicnic