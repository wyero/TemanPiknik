import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImagePicnic = () => {
  const [image, setImage] = useState([])
  useEffect(()=>{
    const getImage = async() => {
      const response = await axios.get('http://localhost:1337/api/picnic-collections?sort[1]=id%3Adesc&populate=*')
      setImage(response.data.data)
    }
    getImage()
  }, [])
  return (
   <div className='container flex justify-center gap-[10px] flex-wrap'>
    {image.slice(0,6).map((image)=>(
      <img key={image.id} src={process.env.REACT_APP_BASE_URL + image.attributes.image.data.attributes.url} alt={image.attributes.title} className='w-full sm:w-[288px] h-[288px] rounded-lg'/>
    ))}
   </div>
  )
}

export default ImagePicnic