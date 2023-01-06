import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div className=''>
      {/* card */}
    <Link href={`/pokemons/${pokemon.id}`}   className={'flex flex-col items-center gap-5 hover:scale-110 duration-200 ease-in-out'}>

    <Image className='lg:h-[15rem] lg:w-[14rem] md:h-[13rem] md:w-[12rem] h-[10rem] w-[9rem] ' alt={pokemon.name}  src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'+pokemon.image}  width={200} height={200}
    />
    <p className='text-xl '>{pokemon.name}</p>
    
    
          </Link>
          </div>
  )
}

export default Card
