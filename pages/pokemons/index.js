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
import Pagination from "react-pagination-library";
import React from 'react'
import Card from '../../components/card/Card'
const index = ({pokemons}) => {
    console.log(pokemons);
  return (

    <>
    <div className='grid lg:grid-cols-4 
    md:grid-cols-3
    grid-cols-2

    place-items-center 
    
    ' >
      {pokemons.map(pokemon=><Card key={pokemon.id} pokemon={pokemon}/>)}
    </div>

{/* pagination */}
{/* npm install react-pagination-library */}

<div>
<Pagination
          currentPage={this.state.currentPage}
          totalPages={10}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        <h2>current Page:{this.state.currentPage}</h2>
</div>


    </>
  )
}

export default index
