import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      {/* layout */}
        <Navbar/>
        {/* root  */}
        <div className='lg:px-[7rem] md:px-[6rem] px-[5rem] py-[5rem]'>
        {children}

        </div>
    </div>
  )
}

export default Layout
