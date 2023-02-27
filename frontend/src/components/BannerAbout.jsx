import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BannerAbout = () => {
    const [banner, setBanner] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getBanner = async() => {
            const response = await axios.get('http://localhost:1337/api/about-page?populate=*')
            setBanner(response.data.data)
            setLoading(false)
        }
        getBanner()
    }, [])
    if(loading) return ""
  if(banner !== 0) return (
    <div>
        <div style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL + banner.attributes.banner.data.attributes.url})`}} className='w-full h-[497px] bg-no-repeat bg-cover'>
            <div className='bg-[#FFA2A2] rounded-r-2xl md:w-[710px] relative top-[330px] sm:top-[380px] lg:top-80'>
                <p className='md:w-[700px] p-1 lg:py-[88px] lg:pl-[70px] lg:pr-[90px] text-white font-workSans text-[50px] sm:text-[61px] leading-[72px] font-700'>{banner.attributes.title}</p>
            </div>
        </div>
        <p className='font-workSans sm:w-[492px] font-500 text-[20px] px-1 lg:px-0 ml-auto mt-[80px] sm:mt-[84px] lg:mt-[160px] xl:mt-[84px] xl:mr-1 2xl:mr-[100px]'>{banner.attributes.quotes}</p>
    </div>
  )
}

export default BannerAbout