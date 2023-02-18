import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../../components'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Article = () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const getArticle = async() => {
            const response = await axios.get(`http://localhost:1337/api/picnic-collections/${id}?populate=*`)
            setArticle(response.data.data)
            setLoading(false)
        }
        getArticle()
    }, [id])

    if(loading){
        return <h2 className='text-[22px] mt-10 text-center   font-workSans font-600'>Loading...</h2>
    }

  return (
    <div>
        <Navbar/>
        <div className='lg:mx-auto font-workSans mx-2 lg:w-[859px] mb-[132.38px]'>
            <img src={process.env.REACT_APP_BASE_URL + article.attributes.image.data[0].attributes.url} alt={article.attributes.title} className='lg:w-[859px] h-[312px]'/>
            <p className='text-[49px] font-700 leading-[56px] mt-10 mb-5 text-[#262626]'>{article.attributes.title}</p>
            <p className='font-500 text-[#595959] text-[20px] leading-[140%] text-justify md:text-start'>{article.attributes.content}</p>
            <div className='flex flex-wrap justify-center gap-x-2 lg:justify-between my-5 gap-y-3'>
                <img src={process.env.REACT_APP_BASE_URL + article.attributes.image.data[1].attributes.url} alt={article.attributes.title} className='lg:w-[420px] h-[420px]'/>
                <img src={process.env.REACT_APP_BASE_URL + article.attributes.image.data[2].attributes.url} alt={article.attributes.title} className='lg:w-[420px] h-[420px]'/>
            </div>
            <div className='mt-[54px]'>
                <p className='font-500 text-[25px] text-[#262626] mb-5'>Share to :</p>
                <div className='flex items-center gap-[29.9px]'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsFacebook className='text-[33.33px] text-[#FFA2A2] duration-200 hover:text-[#EC5151]'/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter className='text-[33.33px] text-[#FFA2A2] duration-200 hover:text-[#EC5151]'/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram className='text-[33.33px] text-[#FFA2A2] duration-200 hover:text-[#EC5151]'/></a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Article