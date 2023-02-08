import React from 'react'
import { profile } from '../assets/image'

const CardHappy = () => {
    const items = [
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
        {image: profile, name: "John Doe", desc: "Lorem ipsum dolor sit amet consectetur. Dui tellus tortor mauris senectus ipsum enim platea iaculis. Arcu nisi augue enim lectus quis ornare. Lacus mi id vulputate sed molestie ut scelerisque ultrices."},
    ]
  return (
    <div className='flex flex-wrap justify-center gap-y-[100px] gap-x-20'>
        {items.slice(0,5).map((items, index)=>(
            <div key={index} className='card-happy w-[358px] rounded-[10px] flex flex-col items-center font-workSans text-[#262626]'>
                <img src={items.image} alt={items.image} className='w-[80px] h-[80px]'/>
                <div className='mx-6 mb-6'>
                    <p className='text-[20px] font-500 text-center my-2'>{items.name}</p>
                    <p className='text-center leading-5 font-400'>{items.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardHappy