import React from 'react'

const CardHappy = ({name, image, description}) => {
  return (
    <div className='card-happy w-[358px] rounded-[10px] flex flex-col items-center font-workSans text-[#262626]'>
        <img src={image} alt={name} className='w-[80px] h-[80px] rounded-full'/>
        <div className='mx-6 mb-6'>
            <p className='text-[20px] font-500 text-center my-2'>{name}</p>
            <p className='text-center leading-5 font-400'>{description}</p>
        </div>
    </div>
  )
}

export default CardHappy