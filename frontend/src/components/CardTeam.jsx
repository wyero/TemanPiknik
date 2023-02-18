import React from 'react'
import {BsInstagram} from 'react-icons/bs'

const CardTeam = ({team}) => {
  return (
    <div key={team.id} className='card-happy w-[358px] rounded-[10px] flex flex-col items-center font-workSans text-[#262626]'>
        <img src={process.env.REACT_APP_BASE_URL + team.attributes.photo.data.attributes.url} alt={team.attributes.name} className='w-[102px] h-[102px] mt-6 rounded-full'/>
        <div className='mx-6 mb-[11.67px] sm-[310px]'>
            <p className='text-[21px] font-700 text-center my-2 text-[#262626]'>{team.attributes.name}</p>
            <p className='text-center leading-5 font-400 text-[#8C8C8C]'>{team.attributes.role}</p>
        </div>
        <a href={team.attributes.instagram_url} rel="noreferrer" target={'_blank'} className='mb-[27.67px]'>
            <BsInstagram className='text-[36.67px] text-[#EC5151]'/>
        </a>
    </div>
  )
}

export default CardTeam