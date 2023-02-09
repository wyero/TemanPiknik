import React from 'react'
import { blank } from '../assets/image'

const CardPartner = () => {
    const itemsPartner = [
        {image: blank},
        {image: blank},
        {image: blank},
        {image: blank},
        {image: blank},
        {image: blank},
        {image: blank},
    ]
  return (
    <div className='container md:w-[600px] flex flex-wrap justify-center items-center gap-x-[140px] gap-y-[86px]'>
        {itemsPartner.slice(0,6).map((itemsPartner, index) => (
            <div key={index} className=''>
                <img src={itemsPartner.image} alt={itemsPartner.image} className='w-[85px] h-[85px] rounded-full'/>
            </div>
        ))}
    </div>
  )
}

export default CardPartner