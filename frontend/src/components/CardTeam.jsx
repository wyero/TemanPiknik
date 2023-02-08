import React from 'react'
import { profileTeam } from '../assets/image'
import {BsInstagram} from 'react-icons/bs'

const CardTeam = () => {
    const itemsTeam = [
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
        {img: profileTeam, name: 'Angela Pehulisa', role: 'Head of Partnership & Community Relation', link: 'https://instagram.com'},
    ]
  return (
    <div className='flex flex-wrap justify-evenly gap-y-[88px]'>
        {itemsTeam.slice(0,6).map((itemsTeam, index)=>(
            <div key={index} className='card-happy w-[358px] rounded-[10px] flex flex-col items-center font-workSans text-[#262626]'>
                <img src={itemsTeam.img} alt={itemsTeam.image} className='w-[102px] h-[102px] mt-6'/>
                <div className='mx-6 mb-[11.67px] sm-[310px]'>
                    <p className='text-[21px] font-700 text-center my-2 text-[#262626]'>{itemsTeam.name}</p>
                    <p className='text-center leading-5 font-400 text-[#8C8C8C]'>{itemsTeam.role}</p>
                </div>
                <a href={itemsTeam.link} className='mb-[27.67px]'>
                    <BsInstagram className='text-[36.67px] text-[#EC5151]'/>
                </a>
            </div>
        ))}
    </div>
  )
}

export default CardTeam