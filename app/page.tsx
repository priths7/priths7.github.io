"use client"

import { Navbar } from '@/components/Navbar/Navbar'
import { Certifications } from '@/sections/Home/Certifications'
import { Contact } from '@/sections/Home/Contact'
import { Header } from '@/sections/Home/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full overflow-hidden'>
    <Navbar />
    <Header />
    {/* <Portfolio/> */}
    {/* <Certifications/> */}
    {/* <Contact /> */}
    </div>
  )
}
