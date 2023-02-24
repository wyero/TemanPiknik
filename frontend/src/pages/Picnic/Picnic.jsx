import React from 'react'
import { BannerPicnic, CardPicnic, Footer, Navbar } from '../../components'

const Picnic = () => {
  return (
    <div>
        <Navbar/>
        <BannerPicnic/>
        <div className='container mt-16 md:mt-[130px] lg:mt-[210px] mb-[128px]'>
            <CardPicnic/>
        </div>
        <Footer/>
    </div>
  )
}

export default Picnic