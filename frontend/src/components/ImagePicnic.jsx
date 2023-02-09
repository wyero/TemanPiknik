import React from 'react'
import { imagePicnic1, imagePicnic2, imagePicnic3, imagePicnic4, imagePicnic5 } from '../assets/image'

const ImagePicnic = () => {
  return (
   <div className='container flex justify-center gap-[29px]'>
    <img src={imagePicnic1} alt={imagePicnic1} className='hidden sm:block w-[286px] h-[608px] rounded-lg ml-[29px]'/>
    <div className='flex flex-wrap items-center  gap-2 sm:gap-[27px]'>
      <img src={imagePicnic2} alt={imagePicnic2} className='w-full sm:w-[288px] h-[288px] rounded-lg'/>
      <img src={imagePicnic3} alt={imagePicnic3} className='w-full sm:w-[445px] h-[287px] rounded-lg'/>
      <img src={imagePicnic4} alt={imagePicnic4} className='w-full sm:w-[443.48px] h-[292px] rounded-lg'/>
      <img src={imagePicnic5} alt={imagePicnic5} className='w-full sm:w-[287px] h-[293px] rounded-lg'/>
    </div>
   </div>
  )
}

export default ImagePicnic