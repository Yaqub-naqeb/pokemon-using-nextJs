import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>

        <h1>Oooops...</h1>
        <h1>Sorry this page was not Found!</h1>
      
<Link href={'/'}> Back to Home page</Link>


    </div>
  )
}

export default NotFound
