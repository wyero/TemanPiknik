import React, { useEffect, useState } from 'react'
import { getApi } from '../config/HTTPHandler'

const CardPartner = () => {
    const [partner, setPartner] = useState([])
    useEffect(()=>{
        const getPartner = async() => {
            const response = await getApi('/partners?populate=*', true)
            setPartner(response.data)
        }
        getPartner()
    },[])
  return (
    <div className='container md:w-[600px] flex flex-wrap justify-center items-center gap-x-[140px] gap-y-[86px]'>
        {partner.slice(0,6).map((partner)=>{
            return(
                <div key={partner.id}>
                    <img src={process.env.REACT_APP_BASE_URL + partner.attributes.image.data.attributes.url} alt={partner.attributes.name} className='w-[85px] h-[85px] rounded-full'/>
                </div>
            )
        })}
    </div>
  )
}

export default CardPartner