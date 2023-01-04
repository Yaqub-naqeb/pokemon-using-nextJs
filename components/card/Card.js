import Image from 'next/image'
import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div  key={pokemon.id}>

    <Image alt={pokemon.name}  src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'+pokemon.image}  width={200} height={200}
    />
    <p>{pokemon.name}</p>
    
    
          </div>
  )
}

export default Card
