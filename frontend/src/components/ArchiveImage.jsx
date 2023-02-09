import React from 'react'
import { article1 } from '../assets/image'

const ArchiveImage = () => {
    const image = [
        {img: article1},
        {img: article1},
        {img: article1},
        {img: article1},
        {img: article1},
        {img: article1},
    ]
  return (
    <div className='flex flex-wrap justify-center mx-2 gap-4'>
        {image.map((image, index)=>(
            <img key={index} src={image.img} alt={image.img} className='md:w-[420px] h-[312px] rounded-2xl'/>
        ))}
    </div>
  )
}

export default ArchiveImage