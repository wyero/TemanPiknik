import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImagePicnic = () => {
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const getImage = async() => {
      const response = await axios.get('http://localhost:1337/api/picnic-collections?populate=*')
      setImage(response.data.data[0])
      setLoading(false)
    }
    getImage()
  }, [])
  if(loading) return ""
  return (
   <div className='container flex justify-center gap-[29px]'>
    <img src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='hidden sm:block w-[286px] h-[608px] rounded-lg ml-[29px]'/>
    <div className='flex flex-wrap items-center  gap-2 sm:gap-[27px]'>
      <img src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='w-full sm:w-[288px] h-[288px] rounded-lg'/>
      <img src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='w-full sm:w-[445px] h-[287px] rounded-lg'/>
      <img src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='w-full sm:w-[443.48px] h-[292px] rounded-lg'/>
      <img src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='w-full sm:w-[287px] h-[293px] rounded-lg'/>
    </div>
   </div>
  )
}

export default ImagePicnic