import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Footer, Navbar, CardTeam } from '../../components'

const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        const getTeam = async() => {
            const response = await axios.get('http://localhost:1337/api/teams?populate=*')
            setTeams(response.data.data)
        }
        getTeam()
    }, [])
  return (
    <section>
        <Navbar/>
        <div className='mt-3 mb-[114px] container'>
                <p className='font-workSans font-700 text-[49px] text-center text-[#262626] mb-10'>Our <span className='text-[#EC5151]'>Team</span></p>
                <div className='flex flex-wrap justify-evenly gap-y-[88px] mx-2'>
                    {teams.map((team)=>{
                        return(
                            <CardTeam key={team.id} team={team}/>
                        )
                    })}
                </div> 
            </div>
        <Footer/>
    </section>
  )
}

export default Team