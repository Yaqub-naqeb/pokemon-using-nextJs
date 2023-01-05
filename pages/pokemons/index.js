export const getStaticProps=async()=>{
    const res=await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    const data=await res.json()

    return{
        props:{
            pokemons:data
        }
    }


}




import Pagenate from '../../components/paginate/Pagenate'
import React, { useState } from 'react'
import Card from '../../components/card/Card'
import NotFound from '../../components/card/NotFound'
import Searchbar from '../../components/searchbar/Searchbar'
const Index = ({pokemons}) => {
  
const [search,setSearch]=useState('');
const [sub,setSub]=useState('');




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


    const changeHandler=(e)=>{

      setSub(e.target.value);
      
    }
    const submitHandler=(e)=>{
e.preventDefault();

setSearch(sub)

    }

  return (



    <div className='flex flex-col  items-center gap-[5rem]'>




   <div className='flex flex-col items-center gap-[8rem]'>


    {/* search */}
<div >
<Searchbar submitHandler={submitHandler} changeHandler={changeHandler} />
</div>



    {/* Card of pokemons */}
   <div className='grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 place-items-center gap-x-[8rem] gap-y-[4rem]' >
{search.length!=0 ?
(pokemons.map(pk=>search.toLowerCase()==pk.name.toLowerCase() ? <Card key={pk.id} pokemon={pk}/>:''))
  : currentPosts?.map(pokemon=><Card key={pokemon.id} pokemon={pokemon} />) }

    </div>
   </div>


{/* pagination */}
<div>
<Pagenate currentPage={currentPage} changeCurrentPage={changeCurrentPage} NumOfPage={NumOfPage}/>
</div>


    </div>
  )
}

export default Index
