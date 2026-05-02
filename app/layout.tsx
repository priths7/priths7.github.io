import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Prithvi Chakravarthy | Full Stack Developer`,
  description: 'Prithvi Chakravarthy\'s Digital Portfolio. A Full Stack Developer and Master\'s Student at Depaul in Computer Science building robust web applications, distributed systems and AI applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-[100%]'>
      <body className='font-[Poppins] bg-black h-full'>{children}</body>
    </html>
  )
}
