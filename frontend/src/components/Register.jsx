import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const register = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:1337/api/picnic-forms', {
                data: {
                    fullname: name,
                    email: email,
                    phone_number: phone
                }
            })
            setName('')
            setEmail('')
            setPhone('')
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <div className='md:w-[505px] container xl:left-36 relative rounded-3xl border-[2px] border-[#FFE0E0] bg-[#FBFBFB]'>
        <form className='font-workSans py-10 text-[#262626]' onSubmit={register}>
            <p className='text-center font-500 text-[25px]'>Datfarkan dirimu untuk ikut piknik</p>
            <div className='flex flex-col px-10 mt-6 text-base font-400'>
                <label htmlFor="name">Siapa nama kamu?</label>
                <input type="text" id='name' placeholder='Masukkan nama mu disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4 focus:outline-[#EC5151]' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex flex-col px-10 my-6 text-base font-400'>
                <label htmlFor="email">E-mail kamu?</label>
                <input type="email" id='email' placeholder='Masukkan email mu disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4 focus:outline-[#EC5151]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col px-10 text-base font-400'>
                <label htmlFor="hp">No. Hp kamu?</label>
                <input type="number" id='hp' placeholder='Masukkan nomor hp disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4 focus:outline-[#EC5151]'  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <button className='absolute right-0 text-white -bottom-20 font-workSans text-[20px] font-500 bg-[#EC5151] py-4 px-6 rounded-2xl duration-200 hover:bg-opacity-80'>Daftar Sekarang</button>
        </form>
    </div>
  )
}

export default Register