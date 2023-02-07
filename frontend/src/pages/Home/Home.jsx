import React from 'react'
import { Navbar, Footer, UpPicnic } from '../../components'
import { Link } from 'react-router-dom'
import { image1 } from '../../assets/image'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='hidden xl:block absolute bg-[#FFA2A2] w-[400px] -z-50 h-[350px] 2xl:w-[490px] 2xl:h-[465px] right-0 top-0'></div>
        <img src={image1} alt={image1} className='hidden xl:block -z-50 absolute w-[500px] h-[430px] 2xl:w-[552px] 2xl:h-[497px] rounded-2xl right-[68px] top-[104px]'/>
        <section className=''>
            <div className='font-workSans font-700 w-full mx-1 mt-[108px] xl:w-[660px] sm:mx-auto xl:ml-70'>
                <p className='text-[55px] sm:text-[61px] text-[#262626] mb-5 sm:mx-70 xl:mx-0'>We're going to have a picnic, weather permitting. <span className='text-[#EC5151]'>Shall we?</span></p>
                <Link to='/' className='bg-[#EC5151] text-[31px] text-[#FBFBFB] py-4 px-8 rounded-2xl sm:ml-70 xl:ml-0'>Let's Go!</Link>
            </div>
            <div className='sm:mx-70 bg-[#FFA2A2] gap-7 mt-[207px] rounded-[20px] flex flex-wrap justify-between font-workSans p-10 sm:p-12 text-[#FBFBFB]'>
                <div className='w-[248px]'>
                    <p className='text-[49px] font-700 mb-5'>About Us.</p>
                    <p className='text-xl font-500 leading-7'>Bentuk istirahat kami dari kesibukan harian.</p>
                </div>
                <div className='flex flex-wrap gap-7'>
                    <div className='font-400 leading-5 sm:w-[276px] mr-[30px]'>
                        <p>Berdiri sejak 2018, Teman Piknikmu merupakan tempat beristirahat bagi mereka yang ingin terpisahkan sejenak dari kehidupan sehari-hari.</p>
                        <p className='mt-6'>Teman Piknikmu telah menyelenggarakan lebih dari 20 piknik dan diikuti lebih dari 400 peserta dari penjuru nusantara, bahkan hingga luar negeri.</p>
                    </div>
                    <div className='sm:w-[276px]'>
                        <p>Belasan taman juga sudah menjadi saksi banyak pertemuan dan tidak sedikit yang berujung persahabatan sampai kamu membaca tulisan ini.</p>
                        <p className='mt-6'>Teman Piknikmu bersama dengan begitu banyak orang luar biasa telah menjadi bagian dari patah hati, kebosanan, kesendirian sampai kerinduan banyak orang tentang taman dan aktifitas luar rumah.</p>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <p className='text-center text-[#EC5151] font-workSans font-700 text-[49px] mb-6'>Upcoming <span className='text-[#262626]'>Picnic</span></p>
                <div className='bg-[#FFE0E0]'>
                    <div className='md:mx-70 py-12 flex flex-wrap gap-7 justify-center'>
                        <UpPicnic/>
                        <UpPicnic/>
                    </div>
                </div>
            </div>
            <div className='mt-[120px] font-workSans w-[373px] mx-auto'>
                <p className='text-center font-700 text-[49px] leading-[56px]'>Our <span className='text-[#EC5151]'>Picnic</span> from Yesterday</p>
                <p className='text-center text-[#595959] font-500 leading-[22.4px] mt-4'>Every memory and joyful moment captured and save in this beautiful gallery</p>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home