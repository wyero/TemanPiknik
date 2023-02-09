import React from 'react'
import { Footer, Navbar, Register } from '../../components'
import { imagePicnic } from '../../assets/image'

const DetailPicnic = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-[#FFA2A2]'>
            <div className='container flex-wrap p-3 lg:p-0 relative w-full flex items-center justify-center xl:justify-start gap-[52px]'>
                <img src={imagePicnic} alt={imagePicnic} className='hidden xl:block relative top-24 imagePicnic w-[388px] h-[389px]'/>
                <div className='font-workSans w-full text-white font-700 text-center mx-2 xl:text-start xl:w-[570px]'>
                    <p className='text-[57px] md:text-[61px] leading-[72px]'>Picnic at Museum</p>
                    <div className='text-[20px] md:text-[25px]'>
                        <p className='lg:my-2'>Sabtu, 16 Juli 2022 | 15.00 - Selesai</p>
                        <p>Taman Kota, Jakarta</p>
                    </div>
                </div>
                <img src={imagePicnic} alt={imagePicnic} className='xl:hidden relative mx-2 -top-5 imagePicnic sm:w-[388px] h-[389px]'/>
            </div>
        </div>
        <div className='container mx-auto xl:text-start text-justify font-workSans font-500 text-[20px] text-[#262626] leading-[140%]'>
            <div className='xl:w-[680px] mx-2 xl:ml-auto mt-10'>
            <div className='mr-2'>
                <p className='mb-7'>Halo semua!</p>
                <p>Kami sangat senang untuk mengumumkan bahwa acara picnic tahunan kami akan segera diadakan! Ini adalah kesempatan bagus untuk berkumpul bersama teman-teman, keluarga, dan rekan kerja sambil menikmati suasana alam. Berikut adalah informasi penting tentang acara tersebut:</p>
            </div>
            <div className='mr-2 my-5'>
                <p>Tanggal: Sabtu, 16 Juli 2022</p>
                <p>Waktu: 10:00 AM - 4:00 PM</p>
                <p>Lokasi: Taman Kota, Jakarta</p>
            </div>
            <div className='mr-2 my-5'>
                <p>Aktivitas :</p>
                <ul>
                    <li>- Makan siang bersama</li>
                    <li>- Bermain permainan luar ruangan</li>
                    <li>- Berkumpul dan berbicara dengan teman-teman</li>
                </ul>
            </div>
            <div className='mr-2 my-5'>
                <p>Kebutuhan :</p>
                <ul>
                    <li>- Tas makan siang</li>
                    <li>- Perlengkapan untuk bermain</li>
                    <li>- Sunscreen jika perlu</li>
                    <li>- Uang tunai jika ingin membeli makanan atau minuman di lokasi</li>
                </ul>
            </div>
            <div className='mr-2 my-5'>
                <p>Untuk mengikuti acara ini, harap RSVP dengan mengirim email ke [alamat email] pada tanggal 10 Mei 2023. Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.</p>
                <p className='my-5'>Kami sangat berharap untuk melihat Anda di acara picnic tahunan kami!</p>
                <p>Salam,</p>
                <p>Panitia Acara</p>
            </div>
            </div>
            <div className='mt-[60px] mb-48 mx-2'>
                <Register/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailPicnic