import React from 'react'
import { Link } from 'react-router-dom'
import { imagePicnic } from '../assets/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const UpPicnic = () => {
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
        <SwiperSlide>
          <div className='bg-white md:flex md:items-end p-2 md:p-5 rounded-[20px] mx-2 md:mx-0 md:w-[794px]'>
            <img src={imagePicnic} alt={imagePicnic} className='h-[311px] md:w-[310px] w-full mx-auto mb-4 md:mb-0 md:mr-5'/>
            <div className='font-workSans text-[#595959] font-500 md:w-[420px] mr-4'>
              <p className='text-[#262626] text-[25px]'>Picnic at Museum</p>
              <p className='text-[20px] my-2'>02 December 2022</p>
              <p className='line-clamp-3 font-400 leading-5 mb-6'>Lorem ipsum dolor sit amet consectetur. In augue arcu integer morbi in morbi. Dictumst faucibus amet nunc ultrices metus. Diam quis.</p>
              <Link to='/detail-picnic'>
                  <p className='text-[#FBFBFB] text-[31px] font-700 bg-[#EC5151] py-4 px-6 rounded-2xl w-[190px] mb-4 md:mb-0 duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#FFA2A2]'>Let's Go!</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white md:flex md:items-end p-2 md:p-5 rounded-[20px] mx-2 md:mx-0 md:w-[794px]'>
            <img src={imagePicnic} alt={imagePicnic} className='h-[311px] md:w-[310px] w-full mx-auto mb-4 md:mb-0 md:mr-5'/>
            <div className='font-workSans text-[#595959] font-500 md:w-[420px] mr-4'>
              <p className='text-[#262626] text-[25px]'>Picnic at Museum</p>
              <p className='text-[20px] my-2'>02 December 2022</p>
              <p className='line-clamp-3 font-400 leading-5 mb-6'>Lorem ipsum dolor sit amet consectetur. In augue arcu integer morbi in morbi. Dictumst faucibus amet nunc ultrices metus. Diam quis.</p>
              <Link to='/detail-picnic'>
                  <p className='text-[#FBFBFB] text-[31px] font-700 bg-[#EC5151] py-4 px-6 rounded-2xl w-[190px] mb-4 md:mb-0 duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#FFA2A2]'>Let's Go!</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white md:flex md:items-end p-2 md:p-5 rounded-[20px] mx-2 md:mx-0 md:w-[794px]'>
            <img src={imagePicnic} alt={imagePicnic} className='h-[311px] md:w-[310px] w-full mx-auto mb-4 md:mb-0 md:mr-5'/>
            <div className='font-workSans text-[#595959] font-500 md:w-[420px] mr-4'>
              <p className='text-[#262626] text-[25px]'>Picnic at Museum</p>
              <p className='text-[20px] my-2'>02 December 2022</p>
              <p className='line-clamp-3 font-400 leading-5 mb-6'>Lorem ipsum dolor sit amet consectetur. In augue arcu integer morbi in morbi. Dictumst faucibus amet nunc ultrices metus. Diam quis.</p>
              <Link to='/detail-picnic'>
                  <p className='text-[#FBFBFB] text-[31px] font-700 bg-[#EC5151] py-4 px-6 rounded-2xl w-[190px] mb-4 md:mb-0 duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#FFA2A2]'>Let's Go!</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default UpPicnic