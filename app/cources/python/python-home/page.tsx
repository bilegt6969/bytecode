'use client'
import Head from 'next/head'
import React from 'react'
import Feed from './Feed'
import Bonav from '../../../BottomNavy-css'
import Sidebar from '../../../../components/dashbar-css'

function page() {
  return (
    <div>
        <main className='grid grid-cols-5 gap-x-4'>
        <Feed/>
        </main>
        

    </div>
  )
}

export default page