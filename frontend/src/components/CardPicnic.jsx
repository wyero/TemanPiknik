import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'
import axios from 'axios'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import ReactPaginate from 'react-paginate'

const CardPicnic = () => {
    const [picnics, setPicnics] = useState([])
    const [pageCount, setPageCount] = useState(0)

    useEffect(()=>{
        const getPicnic = async() => {
            const response = await axios.get(`http://localhost:1337/api/picnic-collections?pagination[page]=1&pagination[pageSize]=4&populate=*`)
            setPicnics(response.data.data)
            setPageCount(response.data.meta.pagination.pageCount)
        }
        getPicnic()
    }, [])

    const getPicnics = async(currentPage) => {
        const response = await axios.get(`http://localhost:1337/api/picnic-collections?pagination[page]=${currentPage}&pagination[pageSize]=4&populate=*`)
        const data = response.data.data
        return data
    }

    const handleClick = async(data) =>{
        let currentPage = data.selected + 1 
        const click = await getPicnics(currentPage)
        setPicnics(click)
    }

  return (
    <div>
        {picnics.map((picnic)=>(
            <div key={picnic.id} className='flex flex-col lg:flex-row items-center my-8 gap-[21px] mx-2 lg:mx-0'>
                <img src={process.env.REACT_APP_BASE_URL + picnic.attributes.image.data.attributes.url} alt={picnic.attributes.title} className='w-[420px] h-[312px] lg:mb-0 rounded-2xl'/>
                <div className='font-workSans sm:w-[600px] sm:text-center lg:text-start lg:w-[749px] lg:mr-5'>
                    <p className='text-[49px] font-700 leading-[56px]'>{picnic.attributes.title}</p>
                    <ReactMarkdown className='line-clamp-1 my-5 text-[20px] text-[#595959] font-500'>{picnic.attributes.description}</ReactMarkdown>
                    <Link to={`/yesterday-picnic/${picnic.attributes.slug}`} className='text-[#EC5151] font-500 text-[20px] duration-100 hover:opacity-75'>Read More</Link>
                </div>
            </div>
        ))}
        <ReactPaginate
            className='mt-12 flex items-center justify-center font-workSans text-[20px] font-500 gap-7 cursor-pointer text-[#595959]'
            previousLabel={<FiChevronLeft/>}
            nextLabel={<FiChevronLeft className='rotate-180'/>}
            breakLabel={'...'}
            onPageChange={handleClick}
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            renderOnZeroPageCount={null}
        ></ReactPaginate>
    </div>
  )
}

export default CardPicnic