import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navbar, Footer, UpPicnic, ImagePicnic, CardPartner, HappyList, BannerHome, HomeAbout } from '../../components'

const Home = () => {
    const [picnics, setPicnics] = useState([]) 

    const getPicnic = async() => {
        const response = await axios.get('http://localhost:1337/api/picnics?populate=*')
        setPicnics(response.data.data)
    }

    useEffect(()=>{
        getPicnic()
    }, [])

    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section className=''>
                <div>
                    <BannerHome/>
                </div>
                <div className='mx-2'>
                    <HomeAbout/>
                </div>
               {picnics.length>0 && (<div className='mt-16 md:mt-20'>
                    <p className='text-center text-[#EC5151] font-workSans font-700 text-[49px] mb-6'>Upcoming <span className='text-[#262626]'>Picnic</span></p>
                    <div className='bg-[#FFE0E0]'>
                        <div className='container py-12 gap-7'>
                            <UpPicnic />
                        </div>
                    </div>
                </div>)}
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