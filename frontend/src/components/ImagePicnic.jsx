import React from 'react'
import { imagePicnic1, imagePicnic2, imagePicnic3, imagePicnic4, imagePicnic5 } from '../assets/image'

const ImagePicnic = () => {
  return (
    <div className='mx-2 gap-3 flex justify-center flex-wrap lg:relative xl:block xl:justify-start xl:mx-[183px]'>
        <img src={imagePicnic1} alt={imagePicnic1} className='rounded-lg w-full h-[293px] sm:w-[445px] xl:w-[286px] xl:h-[608px]'/>
        <img src={imagePicnic2} alt={imagePicnic2} className='rounded-lg w-full h-[293px] sm:w-[445px] xl:w-[288px] xl:h-[288px] xl:absolute xl:left-[300px] xl:top-0 2xl:left-[330px]'/>
        <img src={imagePicnic3} alt={imagePicnic3} className='rounded-lg w-full h-[293px] sm:w-[445px] xl:w-[288px] 2xl:w-[445px] xl:h-[287px] xl:absolute xl:left-[600px] xl:top-0 2xl:left-[650px]'/>
        <img src={imagePicnic4} alt={imagePicnic4} className='rounded-lg w-full h-[293px] sm:w-[445px] xl:w-[288px] 2xl:w-[443.48px] xl:h-[292px] xl:absolute xl:left-[300px] bottom-0 2xl:left-[330px]'/>
        <img src={imagePicnic5} alt={imagePicnic5} className='rounded-lg w-full h-[293px] sm:w-[445px] xl:w-[288px] 2xl:w-[287px] xl:absolute xl:bottom-0 xl:left-[600px] 2xl:left-[810px]'/>
    </div>
  )
}

export default ImagePicnic