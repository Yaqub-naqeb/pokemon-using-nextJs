import React from 'react'

const Button = ( {name}) => {
  return (
    <div>
       <button className='bg-transparent hover:bg-[#1F2937] text-[#1F2937] font-semibold hover:text-white py-2 px-4 border border-[#1F2937] mt-[3rem] hover:border-transparent rounded duration-500 ease-in-out transition-all'>
    {name}
    </button>
    </div>
  )
}

export default Button
