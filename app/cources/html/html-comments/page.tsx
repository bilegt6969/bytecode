'use client'
import Head from 'next/head'
import React from 'react'
import Feed from './Feed'
import Bonav from '../../../BottomNavy'
import Sidebar from '../../../../components/dashbar-html'

function page() {
  return (
    <div>
              <Bonav/>
        <main className='grid grid-cols-5 gap-x-4'>
        <Sidebar/>
        <Feed/>
        </main>
        

    </div>
  )
}

export default page