import Image from 'next/image'
import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div   className={'flex flex-col items-center gap-5 hover:scale-110 duration-200 ease-in-out'}>

    <Image className='h-[15rem] w-[14rem]' alt={pokemon.name}  src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'+pokemon.image}  width={200} height={500}
    />
    <p className='text-xl '>{pokemon.name}</p>
    
    
          </div>
  )
}

export default Card
