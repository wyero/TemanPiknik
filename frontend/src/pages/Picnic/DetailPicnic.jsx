import React from 'react'
import { Footer, Navbar, Register } from '../../components'
import { imagePicnic } from '../../assets/image'

const DetailPicnic = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-[#FFA2A2] h-[249px] w-full flex items-center justify-center gap-[52px]'>
            <img src={imagePicnic} alt={imagePicnic} className='relative -left-14 top-[105px] w-[388px] h-[389px] imagePicnic'/>
            <div className='font-workSans text-white font-700'>
                <p className='text-[61px] leading-[72px]'>Picnic at Museum</p>
                <div className='text-[25px]'>
                    <p className='my-2'>Sabtu, 16 Juli 2022 | 15.00 - Selesai</p>
                    <p>Taman Kota, Jakarta</p>
                </div>
            </div>
        </div>
        <div className='w-[720px] ml-auto font-workSans font-500 text-[20px] text-[#262626] leading-[140%] mt-10'>
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
            <div className='mt-[60px] mb-48'>
                <Register/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailPicnic