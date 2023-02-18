import React, { useEffect, useState } from 'react'
import CardHappy from './CardHappy'
import axios from 'axios'

const HappyList = () => {
  const [testimonial, setTestimonial] = useState([])
  useEffect(()=>{
    const getTestimonial = async() => {
      const response = await axios.get('http://localhost:1337/api/testimonials?populate=*')
      setTestimonial(response.data.data)
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