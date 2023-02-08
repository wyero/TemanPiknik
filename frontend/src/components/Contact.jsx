import React from 'react'

const Contact = () => {
  return (
    <div className='contact bg-[#FBFBFB] md:w-[495px] rounded-3xl border-[2px] border-[#FFE0E0] '>
        <form action="" className='p-10'>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="name" className='mb-2'>Siapa nama kamu?</label>
                <input type="text" id='name' placeholder='Masukkan nama mu disini' className='rounded-2xl border-[1px] py-3 px-4 border-[#BFBFBF]'/>
            </div>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="email" className='mb-2'>E-mail kamu?</label>
                <input type="email" id='email' placeholder='Masukkan email mu disini' className='rounded-2xl border-[1px] py-3 px-4 border-[#BFBFBF]'/>
            </div>
            <div className='flex flex-col font-workSans font-400 text-[#262626] mb-6'>
                <label htmlFor="message" className='mb-2'>Pesan mu untuk kita : </label>
                <textarea id='message' placeholder='Apapun yang ingin kamu sampaikan' className='rounded-2xl h-[124px] border-[1px] py-3 px-4 border-[#BFBFBF]'></textarea>
            </div>
            <button className='font-workSans bg-[#FFA2A2] w-full font-700 text-white rounded-3xl py-2 text-[18px]'>Kirim</button>
        </form>
    </div>
  )
}

export default Contact