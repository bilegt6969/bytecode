import Head from 'next/head'
import Navbar from '../../../Navbar'
import React from 'react'
import Feed from './Feed'
import Sidebar from '../../../../components/dashbar'
import Bonav from '../../../BottomNavy'


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