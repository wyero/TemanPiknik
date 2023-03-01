import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { getApi } from '../config/HTTPHandler';

const UpPicnic = () => {
  const [picnicData, setPicnicData] = useState([])

  useEffect(()=>{
    const getPicnic = async() => {
      const response = await getApi('/picnics?populate=*', true)
      setPicnicData(response.data)
    }
    getPicnic()
  },[])

  const myDate = (value) => {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(value).toLocaleDateString("en-GB", options)
  }
  return (
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {picnicData.map((picnic)=>(
            <SwiperSlide key={picnic.id}>
              <div className='bg-white md:flex md:items-end p-2 md:p-5 rounded-[20px] mx-2 md:mx-0 md:w-[794px]'>
                <img src={process.env.REACT_APP_BASE_URL + picnic.attributes.feature_image.data.attributes.url} alt={picnic.attributes.title} className='h-[311px] md:w-[310px] w-full mx-auto mb-4 md:mb-0 md:mr-5'/>
                <div className='font-workSans text-[#595959] font-500 md:w-[420px] mr-4 pb-5 md:pb-0'>
                  <p className='text-[#262626] text-[25px]'>{picnic.attributes.title}</p>
                  <p className='text-[20px] my-2'>{myDate(picnic.attributes.start_date_time)}</p>
                  <p className='line-clamp-3 font-400 leading-5 mb-6'>{picnic.attributes.excerpt}</p>
                    <Link to={`/event/${picnic.attributes.slug}`}>
                      <div className='text-[#FBFBFB] text-[31px] text-center font-700 bg-[#EC5151] py-4 px-6 rounded-2xl duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#FFA2A2] w-[190px]'>Let's Go!</div>
                    </Link>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default UpPicnic