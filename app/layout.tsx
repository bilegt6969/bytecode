'use client'
import './globals.css'
import Navbar from './Navbar'
import { useRouter } from 'next/router';
import Home from './Home';
import {Analytics} from '@vercel/analytics/react'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  

  return (<>
    <html lang="en">
      <title>Bytecode</title>

      <body className='bg-black text-white'>
        <Navbar/>
        

        <main className='max-w-screen-xl mx-auto'>
          
          {children}</main>    <Analytics />
        </body>
    </html>
    </>
  )
}




