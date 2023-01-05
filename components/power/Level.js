import React, { useEffect, useState } from 'react'

const Level = ({power}) => {


    

  return (


    <div>



    <li className='list-decimal  grid grid-cols-2 place-items-start justify-between gap-x-1 align-middle py-5 gap-y-3 '>



{/* name of power */}
<div className='text-center'> {power.name }</div>




{/* level of power */}

<div className="w-[100%] bg-gray-200 rounded-full shadow-md">
  <div className={` text-xs font-medium text-blue-100 text-center h-3 leading-none rounded-md  ${power.value < 60 ? 'bg-red-600' : 'bg-green-600'} `} style={{ width: `${power.value>100?'100':power.value}%`}}> {power.value>100?'100':power.value}%</div>
</div>

    </li>
    </div>
  )
}

export default Level
