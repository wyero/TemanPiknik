import React from 'react'
import { Navbar, Footer, UpPicnic, ImagePicnic, CardPartner, HappyList } from '../../components'
import { Link } from 'react-router-dom'
import { image1 } from '../../assets/image'
import { content } from '../../data'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section className=''>
                <div className='flex container mx-auto'>
                    <div className='font-workSans mx-2 font-700 w-full md:mt-[108px] lg:mt-0 xl:mt-[108px] xl:w-[665px] container'>
                        <p className='text-[55px] sm:text-[61px] text-[#262626] mb-5'>We're going to have a picnic, weather permitting. <span className='text-[#EC5151]'>Shall we?</span></p>
                        <Link to='/yesterday-picnic' className='bg-[#EC5151] text-[31px] text-[#FBFBFB] py-4 px-8 rounded-2xl w-[205px] duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#EC5151]'>Let's Go!</Link>
                    </div>
                    <div className='hidden lg:block absolute bg-[#FFA2A2] w-[400px] -z-50 h-[350px] 2xl:w-[490px] 2xl:h-[465px] right-0 top-0'></div>
                    <img src={image1} alt={image1} className='hidden lg:block -z-50  w-[500px] h-[430px] 2xl:w-[552px] 2xl:h-[497px] rounded-2xl' />
                </div>
                <div className='mx-2'>
                    {content.map((content, index) => (
                        <div key={index} className='container bg-[#FFA2A2] gap-7 mt-16 md:mt-[207px] rounded-[20px] flex flex-wrap justify-center lg:justify-between font-workSans p-10 sm:p-12 text-[#FBFBFB]'>
                            <div className='w-[248px]'>
                                <p className='text-[49px] font-700 mb-5'>{content.title}</p>
                                <p className='text-xl font-500 leading-7'>{content.desc1}</p>
                            </div>
                            <div className='flex flex-wrap justify-center gap-7'>
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
                </div>
                <div className='mt-16 md:mt-20'>
                    <p className='text-center text-[#EC5151] font-workSans font-700 text-[49px] mb-6'>Upcoming <span className='text-[#262626]'>Picnic</span></p>
                    <div className='bg-[#FFE0E0]'>
                        <div className='container py-12 gap-7'>
                            <UpPicnic />
                        </div>
                    </div>
                </div>
                <div className='relative mb-[121px] mx-2'>
                    <div className='mt-16 md:mt-[120px] font-workSans sm:w-[373px] mx-auto mb-[60px]'>
                        <p className='text-center font-700 text-[49px] leading-[56px]'>Our <span className='text-[#EC5151]'>Picnic</span> from Yesterday</p>
                        <p className='text-center text-[#595959] font-500 leading-[22.4px] mt-4'>Every memory and joyful moment captured and save in this beautiful gallery</p>
                    </div>
                    <ImagePicnic />
                    <div className='absolute w-[688px] h-[688px] rounded-full bg-[#F1F9EB] -z-50 -bottom-52 -left-[200px]'></div>
                    <div className='absolute w-[688px] h-[688px] rounded-full bg-[#F1F9EB] -z-50 top-20 -right-[200px]'></div>
                </div>
                <div>
                    <p className='text-center font-workSans text-[49px] font-700 text-[#262626] leading-[56px] w-[315px] mx-auto mb-6'>Our <span className='text-[#EC5151]'>Happy</span> Picnic Mates</p>
                    <div className='mx-2'>
                        <HappyList/>
                    </div>
                </div>
                <div className='mt-16 md:mt-[140px] mb-[137px]'>
                    <p className='text-center font-700 font-workSans text-[49px] text-[#262626] mb-10'>Our <span className='text-[#EC5151]'>Partners</span></p>
                    <div className='mx-2'>
                        <CardPartner />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home