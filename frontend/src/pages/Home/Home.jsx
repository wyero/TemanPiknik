import React from 'react'
import { Navbar, Footer, UpPicnic, ImagePicnic, CardHappy, CardPartner } from '../../components'
import { Link } from 'react-router-dom'
import { image1 } from '../../assets/image'
import { content } from '../../data'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='hidden xl:block absolute bg-[#FFA2A2] w-[400px] -z-50 h-[350px] 2xl:w-[490px] 2xl:h-[465px] right-0 top-0'></div>
        <img src={image1} alt={image1} className='hidden xl:block -z-50 absolute w-[500px] h-[430px] 2xl:w-[552px] 2xl:h-[497px] rounded-2xl right-[68px] top-[104px]'/>
        <section className=''>
            <div className='font-workSans font-700 w-full mx-1 mt-[108px] xl:w-[660px] sm:mx-auto xl:ml-70'>
                <p className='text-[55px] sm:text-[61px] text-[#262626] mb-5 sm:mx-70 xl:mx-0'>We're going to have a picnic, weather permitting. <span className='text-[#EC5151]'>Shall we?</span></p>
                <Link to='/' className='bg-[#EC5151] text-[31px] text-[#FBFBFB] py-4 px-8 rounded-2xl sm:ml-70 xl:ml-0'>Let's Go!</Link>
            </div>
            {content.map((content, index)=>(
            <div key={index} className='sm:mx-70 bg-[#FFA2A2] gap-7 mt-[207px] rounded-[20px] flex flex-wrap justify-between font-workSans p-10 sm:p-12 text-[#FBFBFB]'>
                <div className='w-[248px]'>
                    <p className='text-[49px] font-700 mb-5'>{content.title}</p>
                    <p className='text-xl font-500 leading-7'>{content.desc1}</p>
                </div>
                <div className='flex flex-wrap gap-7'>
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
            <div className='mt-20'>
                <p className='text-center text-[#EC5151] font-workSans font-700 text-[49px] mb-6'>Upcoming <span className='text-[#262626]'>Picnic</span></p>
                <div className='bg-[#FFE0E0]'>
                    <div className='md:mx-70 py-12 flex flex-wrap gap-7 justify-center'>
                        <UpPicnic/>
                        <UpPicnic/>
                    </div>
                </div>
            </div>
            <div className='relative mb-[121px]'>
                <div className='mt-[120px] font-workSans sm:w-[373px] mx-auto mb-[60px]'>
                    <p className='text-center font-700 text-[49px] leading-[56px]'>Our <span className='text-[#EC5151]'>Picnic</span> from Yesterday</p>
                    <p className='text-center text-[#595959] font-500 leading-[22.4px] mt-4'>Every memory and joyful moment captured and save in this beautiful gallery</p>
                </div>
                <ImagePicnic/>
                <div className='absolute w-[688px] h-[688px] rounded-full bg-[#F1F9EB] -z-50 -bottom-52 -left-[200px]'></div>
                <div className='absolute w-[688px] h-[688px] rounded-full bg-[#F1F9EB] -z-50 top-20 -right-[200px]'></div>
            </div>
            <div>
                <p className='text-center font-workSans text-[49px] font-700 text-[#262626] leading-[56px] w-[315px] mx-auto mb-6'>Our <span className='text-[#EC5151]'>Happy</span> Picnic Mates</p>
                <div className='mx-1'>
                    <CardHappy/>
                </div>
            </div>
            <div className='mt-[140px] mb-[137px]'>
                <p className='text-center font-700 font-workSans text-[49px] text-[#262626] mb-10'>Our <span className='text-[#EC5151]'>Partners</span></p>
                <div className='mx-1 md:w-[600px] md:mx-auto'>
                    <CardPartner/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home