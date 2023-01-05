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
import Pagenate from '../../components/paginate/Pagenate'
import React, { useState } from 'react'
import Card from '../../components/card/Card'
const Index = ({pokemons}) => {
  
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(9);

// kota zhmaray pokemon law pagada
const lastPostIndex=currentPage*postsPerPage;
// yakam zhmaray pokemon law pagada
const firstPostIndex=lastPostIndex-postsPerPage;
// currentPosts it contain only 10 pokemont of current page
const currentPosts=pokemons.slice(firstPostIndex,lastPostIndex);
// number of pages
const NumOfPage=Math.ceil(pokemons.length/postsPerPage);



    const changeCurrentPage=num=>{
      setCurrentPage(num);
    } 



  return (

    <div className='flex flex-col  items-center'>
    {/* Card of pokemons */}
    <div className='grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 place-items-center gap-x-[8rem] gap-y-[4rem]' >
{currentPosts?.map(pokemon=><Card key={pokemon.id} pokemon={pokemon} />)}
    </div>

{/* pagination */}
<div>
<Pagenate currentPage={currentPage} changeCurrentPage={changeCurrentPage} NumOfPage={NumOfPage}/>
</div>


    </div>
  )
}

export default Index
