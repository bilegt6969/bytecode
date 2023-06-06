import React from 'react'
import Feed from './Feed'
import Sidebar from '../../components/dashbar'
import Bnav from '../bottomnav'

function page() {
  return (
    <div>
        <main className='grid grid-cols-5 gap-x-4'>
          <Bnav/>
        <Sidebar/>
        <Feed/>
        </main>
        

    </div>
  )
}

export default page