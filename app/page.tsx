"use client"

import { Navbar } from '@/components/Navbar/Navbar'
import { Header } from '@/sections/Home/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-svh overflow-hidden'>
      <Navbar />
      <Header />
    </div>
  )
}
