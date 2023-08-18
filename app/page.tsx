'use client'
import Head from 'next/head'
import React from 'react'
import Home from '../app/Home'


function page() {
  return (
    <div>
      <Head>
  {/* Other meta tags and stylesheets */}
  <link rel="icon" href="/favicon.ico" />
</Head>
      <Home/>
      
    </div>
  )
}

export default page