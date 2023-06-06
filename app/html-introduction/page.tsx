'use client'
import Head from 'next/head'
import React from 'react'
import Feed from './Feed'
import Sidebar from '../../components/dashbar'
import Bnav from '../bottomnav'

function page() {
  return (
    <div>
                <Bnav/>

        <main className='grid grid-cols-5 gap-x-4'>
        <Sidebar/>
        <Feed/>
        </main>
        

    </div>
  )
}

export default page