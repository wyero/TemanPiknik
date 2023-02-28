import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getApi } from '../config/HTTPHandler'

const BannerHome = () => {
    const [banner, setBanner] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const getBanner = async() => {
            const response = await getApi('/home-page?populate=*', true)
            setBanner(response.data)
            setLoading(false)
        }
        getBanner()
    }, [])
    if(loading) return ""
    return (
        <div className='flex container mx-auto'>
            <div className='font-workSans mx-2 font-700 w-full md:mt-[108px] lg:mt-0 xl:mt-[30px] xl:w-[665px] container'>
                <p className='text-[55px] sm:text-[61px] text-[#262626] mb-5'>{banner.attributes.overview_text}</p>
                <Link to='/yesterday-picnic' className='bg-[#EC5151] text-[31px] text-[#FBFBFB] py-4 px-8 rounded-2xl w-[205px] duration-200 hover:bg-white hover:text-[#EC5151] hover:border-2 hover:border-[#EC5151]'>Let's Go!</Link>
            </div>
            <div className='hidden lg:block absolute bg-[#FFA2A2] w-[400px] -z-50 h-[350px] 2xl:w-[490px] 2xl:h-[465px] right-0 top-0'></div>
            <img src={process.env.REACT_APP_BASE_URL + banner.attributes.banner.data.attributes.url} alt={banner.attributes.overview_text} className='hidden lg:block -z-50  w-[500px] h-[430px] 2xl:w-[552px] 2xl:h-[497px] rounded-2xl' />
        </div>
    )
}

export default BannerHome