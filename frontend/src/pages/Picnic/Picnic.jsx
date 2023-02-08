import React from 'react'
import { CardPicnic, Footer, Navbar } from '../../components'

const Picnic = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-bgPicnic w-full h-[497px] bg-no-repeat bg-cover'>
            <div className='bg-[#FFA2A2] rounded-r-2xl sm:w-[450px] md:w-[522px] relative top-[350px] sm:top-[380px] lg:top-80'>
                <p className='sm:p-2 md:w-[522px] lg:w-[700px] p-1 lg:py-[88px] lg:pl-[70px] lg:pr-[90px] text-white font-workSans text-[50px] sm:text-[61px] leading-[72px] font-700'>Piknik Seru Kemarin</p>
            </div>
        </div>
        <div className='mt-16 md:mt-[130px] lg:mt-[210px] lg:ml-70 mb-[128px]'>
            <CardPicnic/>
        </div>
        <Footer/>
    </div>
  )
}

export default Picnic