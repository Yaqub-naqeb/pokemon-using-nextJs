export const getStaticProps=async()=>{
    const res=await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    const data=await res.json()

    return{
        props:{
            pokemons:data
        }
    }


}



import Image from 'next/image'
import React from 'react'
const index = ({pokemons}) => {
    console.log(pokemons);
  return (
    <div className='grid lg:grid-cols-4 
    md:grid-cols-3
    grid-cols-2

    place-items-center 
    
    ' >


      {pokemons.map(pokemon=><div  key={pokemon.id}>

<Image alt={pokemon.name}  src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'+pokemon.image}  width={200} height={200}
/>
<p>{pokemon.name}</p>


      </div>)}
    </div>
  )
}

export default index
