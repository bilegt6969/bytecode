'use client'
import Head from 'next/head'
import React from 'react'
import Navbar from '@/app/Navbar'
import Home from '../app/Home'
import { useRouter } from 'next/router';


function page() {
  return (
    <div>
      <Head>
  {/* Other meta tags and stylesheets */}
  <link rel="icon" href="/favicon.ico" />
</Head>
      <Head><title>Code.gg</title></Head>
      <Home/>
      
    </div>
  )
}

export default page