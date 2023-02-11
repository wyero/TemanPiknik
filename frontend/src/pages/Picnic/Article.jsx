import React from 'react'
import { Footer, Navbar } from '../../components'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import { article1, article2, article3 } from '../../assets/image'

const Article = () => {
  return (
    <div>
        <Navbar/>
        <div className='lg:mx-auto font-workSans mx-2 lg:w-[859px] mb-[132.38px]'>
            <img src={article1} alt={article1} className='lg:w-[859px] h-[312px]'/>
            <p className='text-[49px] font-700 leading-[56px] mt-10 mb-5 text-[#262626]'>Keseruan Piknik di Taman Kota, Jakarta</p>
            <p className='font-500 text-[#595959] text-[20px] leading-[140%] text-justify md:text-start'>
               Lorem ipsum dolor sit amet consectetur. Nibh diam placerat quis interdum quis mi quis. Fames netus aliquet erat tristique risus ultrices nisl id. Odio sed maecenas urna faucibus convallis id risus pulvinar. Enim diam sem sit quisque pharetra eget. Enim ipsum odio amet erat consectetur. In tristique arcu rutrum vulputate. Et posuere sed quam turpis.
               Scelerisque ornare odio elementum porttitor. Urna tellus facilisi dui mattis in mattis. Dolor habitant mi augue lacus quis. Amet lacus nulla ultrices consectetur eget aenean metus. Felis fermentum dui odio ultrices non tristique quam lectus. Lorem ipsum dolor sit amet consectetur. Nibh diam placerat quis interdum quis mi quis. Fames netus aliquet erat tristique risus ultrices nisl id. Odio sed maecenas urna faucibus convallis id risus pulvinar. Enim diam sem sit quisque pharetra eget. Enim ipsum odio amet erat consectetur. In tristique arcu rutrum vulputate. Et posuere sed quam turpis.
               Scelerisque ornare odio elementum porttitor. Urna tellus facilisi dui mattis in mattis. Dolor habitant mi augue lacus quis. Amet lacus nulla ultrices consectetur eget aenean metus. Felis fermentum dui odio ultrices non tristique quam lectus.
            </p>
            <div className='flex flex-wrap justify-center gap-x-2 lg:justify-between my-5 gap-y-3'>
                <img src={article2} alt={article2} className='lg:w-[420px] h-[420px]'/>
                <img src={article3} alt={article3} className='lg:w-[420px] h-[420px]'/>
            </div>
            <p className='font-500 text-[#595959] text-[20px] leading-[140%] text-justify md:text-start'>Lorem ipsum dolor sit amet consectetur. Nibh diam placerat quis interdum quis mi quis. Fames netus aliquet erat tristique risus ultrices nisl id. Odio sed maecenas urna faucibus convallis id risus pulvinar. Enim diam sem sit quisque pharetra eget. Enim ipsum odio amet erat consectetur. In tristique arcu rutrum vulputate. Et posuere sed quam turpis.
                Scelerisque ornare odio elementum porttitor. Urna tellus facilisi dui mattis in mattis. Dolor habitant mi augue lacus quis. Amet lacus nulla ultrices consectetur eget aenean metus. Felis fermentum dui odio ultrices non tristique quam lectus.
            </p>
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