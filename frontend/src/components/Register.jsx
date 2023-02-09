import React from 'react'

const Register = () => {
  return (
    <div className='md:w-[505px] md:mx-auto lg:mx-0 relative rounded-3xl border-[2px] border-[#FFE0E0] bg-[#FBFBFB]'>
        <form action="" className='font-workSans py-10 text-[#262626]'>
            <p className='text-center font-500 text-[25px]'>Datfarkan dirimu untuk ikut piknik</p>
            <div className='flex flex-col px-10 mt-6 text-base font-400'>
                <label htmlFor="name">Siapa nama kamu?</label>
                <input type="text" id='name' placeholder='Masukkan nama mu disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4'/>
            </div>
            <div className='flex flex-col px-10 my-6 text-base font-400'>
                <label htmlFor="email">E-mail kamu?</label>
                <input type="email" id='email' placeholder='Masukkan email mu disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4'/>
            </div>
            <div className='flex flex-col px-10 text-base font-400'>
                <label htmlFor="hp">No. Hp kamu?</label>
                <input type="number" id='hp' placeholder='Masukkan nomor hp disini' className='mt-2 border-[1px] border-[#BFBFBF] rounded-2xl py-3 px-4'/>
            </div>
            <button className='absolute right-0 text-white -bottom-20 font-workSans text-[20px] font-500 bg-[#EC5151] py-4 px-6 rounded-2xl'>Daftar Sekarang</button>
        </form>
    </div>
  )
}

export default Register