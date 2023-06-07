'use client'
import './globals.css'
import Navbar from './Navbar'
import { useRouter } from 'next/router';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  

  return (
    <html lang="en">
      <title>byte.code</title>

      <body className='bg-black text-white'>
        <Navbar/>
        

        <main className='max-w-screen-xl mx-auto'>{children}</main>
        </body>
    </html>
  )
}




