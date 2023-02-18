import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const sendMessage = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:1337/api/contact-forms',{
                data:{
                    name: name,
                    email: email,
                    description: message
                }
            })
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='contact bg-[#FBFBFB] md:w-[495px] rounded-3xl border-[2px] border-[#FFE0E0] '>
        <form className='p-10' onSubmit={sendMessage}>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="name" className='mb-2'>Siapa nama kamu?</label>
                <input type="text" id='name' placeholder='Masukkan nama mu disini' className='rounded-2xl border-[1px] py-3 px-4 border-[#BFBFBF] focus:outline-[#EC5151]' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="email" className='mb-2'>E-mail kamu?</label>
                <input type="email" id='email' placeholder='Masukkan email mu disini' className='rounded-2xl border-[1px] py-3 px-4 border-[#BFBFBF] focus:outline-[#EC5151]'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="message" className='mb-2'>Pesan mu untuk kita : </label>
                <textarea id='message' placeholder='Apapun yang ingin kamu sampaikan' className='rounded-2xl h-[124px] border-[1px] py-3 px-4 border-[#BFBFBF] focus:outline-[#EC5151]'  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button className='font-workSans bg-[#EC5151] w-full font-700 text-white rounded-3xl py-2 text-[18px]'>Kirim</button>
        </form>
    </div>
  )
}

export default Contact