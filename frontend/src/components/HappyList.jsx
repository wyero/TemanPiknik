import React, { useEffect, useState } from 'react'
import CardHappy from './CardHappy'
import { getApi } from '../config/HTTPHandler'

const HappyList = () => {
  const [testimonial, setTestimonial] = useState([])
  useEffect(()=>{
    const getTestimonial = async() => {
      const response = await getApi('/testimonials?populate=*', true)
      setTestimonial(response.data)
    } 
    getTestimonial()
  }, [])
  return (
    <div className='container flex flex-wrap justify-evenly gap-y-[100px]'>
        {testimonial.slice(0,5).map((testi)=>{
          return(
            <CardHappy key={testi.id} name={testi.attributes.name} description={testi.attributes.description} image={process.env.REACT_APP_BASE_URL + testi.attributes.image.data[0].attributes.url}/>
          )
        })}
    </div>
  )
}

export default HappyList