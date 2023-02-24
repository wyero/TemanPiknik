import React, { useState, useEffect } from 'react'
import { Footer, Navbar, Register } from '../../components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const DetailPicnic = () => {
    const [detailPicnic, setDetailPicnic] = useState({})
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()

    useEffect(()=>{
        const getPicnicByTitle = async()=>{
            const response = await axios.get(`http://localhost:1337/api/picnics?filters[slug][$eq]=${slug}&populate=*`)
            setDetailPicnic(response.data.data)
            setLoading(false)
        }
        getPicnicByTitle()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading){
        return <h2 className='text-[22px] mt-10 text-center   font-workSans font-600'>Loading...</h2>
    }

    const myDate = (value) => {
        return new Date(value).toLocaleDateString(['ban', 'id'], {dateStyle: 'full'})
    }

    const time = (value) => {
        return new Date(value).toLocaleTimeString(['ban', 'id'], {hour: '2-digit', minute: '2-digit'})
    }

  return (
    <div>
        <Navbar/>
        <div className='bg-[#FFA2A2] py-5 xl:py-0'>
            {detailPicnic.map((detailPicnic)=>{
                return(
                    <div key={detailPicnic.id} className='container flex-wrap p-3 lg:p-0 relative w-full flex items-center justify-center xl:justify-start gap-[52px]'>
                        <img src={process.env.REACT_APP_BASE_URL + detailPicnic.attributes.feature_image.data.attributes.url} alt={detailPicnic.attributes.title} className='hidden xl:block relative top-24 imagePicnic w-[388px] h-[389px]'/>
                        <div className='font-workSans w-full text-white font-700 text-center mx-2 xl:text-start xl:w-[570px]'>
                            <p className='text-[57px] md:text-[61px] leading-[72px]'>{detailPicnic.attributes.title}</p>
                            <div className='text-[20px] md:text-[25px]'>
                                <p className='lg:my-2'>{myDate(detailPicnic.attributes.start_date_time)} | {time(detailPicnic.attributes.start_date_time)} - {time(detailPicnic.attributes.end_date_time)}</p>
                                <p>{detailPicnic.attributes.location}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        {detailPicnic.map((detailPicnic)=>{
            return(
                <div key={detailPicnic.id}>
                    <div className='mx-2 flex justify-center py-3 xl:hidden'>
                    <img src={process.env.REACT_APP_BASE_URL + detailPicnic.attributes.feature_image.data.attributes.url} alt={detailPicnic.attributes.title} className='xl:hidden relative imagePicnic sm:w-[388px] h-[389px]'/>
                    </div>
                    <div className='container mx-auto xl:text-start text-justify font-workSans font-500 text-[20px] text-[#262626] leading-[140%]'>
                        <div className='xl:w-[680px] mx-2 xl:ml-auto mt-10'>
                            <div className='mr-2'>
                                <ReactMarkdown className='content'>{detailPicnic.attributes.content}</ReactMarkdown>
                            </div>
                        </div>
                        <div className='mt-[60px] mb-48 mx-2'>
                            <Register/>
                        </div>
                    </div>
                </div>
            )
        })}
        <Footer/>
    </div>
  )
}

export default DetailPicnic