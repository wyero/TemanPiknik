import React, { useEffect, useState } from 'react'
import { getApi } from '../config/HTTPHandler'
import ReactMarkdown from 'react-markdown'

const AboutContent = () => {
    const [content, setContent] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getContent = async() => { 
            const response = await getApi('/about-page?populate=*', true)
            setContent(response.data)
            setLoading(false)
        }
        getContent()
    }, [])
    if(loading) return ""
  return (
    <div className='mx-2'>
        <div className='flex flex-col items-center justify-between xl:flex-row xl:items-start text-[#595959] gap-7 container'>
            <img src={process.env.REACT_APP_BASE_URL + content.attributes.image_description.data.attributes.url} alt="About us" className='hidden xl:block w-[310px] mx-2 h-[281px] bg-[#FFE0E0] rounded-2xl'/>
            <div className='md:w-[248px] text-center flex flex-col items-center xl:text-start'>
                <p className='text-[49px] font-700 mb-1 xl:mb-5 text-[#262626] text-center'>About Us.</p>
                <img src={process.env.REACT_APP_BASE_URL + content.attributes.image_description.data.attributes.url} alt="Abous us" className='xl:hidden w-[310px] h-[281px] mx-2 bg-[#FFE0E0] rounded-2xl'/>
                <p className='text-xl font-500 leading-7'>Bentuk istirahat kami dari kesibukan harian.</p>
            </div>
            <div> 
                <ReactMarkdown className='about'>{content.attributes.description}</ReactMarkdown>
            </div>
        </div>
    </div>
  )
}

export default AboutContent