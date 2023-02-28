import React, {useState, useEffect} from 'react'
import ReactMarkdown  from 'react-markdown'
import { getApi } from '../config/HTTPHandler'

const HomeAbout = () => {
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
    <div className='container bg-[#FFA2A2] gap-7 mt-16 md:mt-[200px] rounded-[20px] flex flex-wrap justify-center lg:justify-between font-workSans p-10 sm:p-12 text-[#FBFBFB]'>
        <div className='w-[248px]'>
            <p className='text-[49px] font-700 mb-5'>About Us.</p>
            <p className='text-xl font-500 leading-7'>Bentuk istirahat kami dari kesibukan harian.</p>
        </div>
        <ReactMarkdown className='about home'>{content.attributes.description}</ReactMarkdown>
    </div>
  )
}

export default HomeAbout