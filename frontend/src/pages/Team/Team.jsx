import React, {useState, useEffect} from 'react'
import { Footer, Navbar, CardTeam } from '../../components'
import { getApi } from '../../config/HTTPHandler'

const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        const getTeam = async() => {
            const response = await getApi('/teams?populate=*', true)
            setTeams(response.data)
        }
        getTeam()
    }, [])
  return (
    <section>
        <Navbar/>
        <div className='mt-3 mb-[114px] container'>
                <p className='font-workSans font-700 text-[49px] text-center text-[#262626] mb-10'>Our <span className='text-[#EC5151]'>Team</span></p>
                <div className='flex flex-wrap justify-evenly gap-y-[88px] mx-2'>
                    {teams.slice(0,6).map((team)=>(
                        <CardTeam key={team.id} team={team}/>
                    ))}
                </div> 
            </div>
        <Footer/>
    </section>
  )
}

export default Team