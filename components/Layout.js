import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='px-[8rem] py-[5rem]'>
        {children}

        </div>
    </div>
  )
}

export default Layout
