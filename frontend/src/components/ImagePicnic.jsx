import React, { useEffect, useState } from 'react'
import { getApi } from '../config/HTTPHandler'

const ImagePicnic = () => {
  const [image, setImage] = useState([])
  useEffect(()=>{
    const getImage = async() => {
      const response = await getApi('/picnic-collections?sort[1]=id%3Adesc&populate=*', true)
      setImage(response.data)
    }
    getImage()
  }, [])
  return (
   <div className='container flex justify-center gap-[10px] flex-wrap'>
      {image.slice(0,6).map((image)=>(
          <img key={image.id} src={process.env.REACT_APP_BASE_URL + image.attributes.images.data[0].attributes.url} alt={image.attributes.title} className='w-full sm:w-[288px] h-[288px] rounded-lg' />
      ))}
   </div>
  )
}

export default ImagePicnic