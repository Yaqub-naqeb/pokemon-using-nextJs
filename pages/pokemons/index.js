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



    <div className='flex flex-col  items-center'>




   <div className='flex flex-col items-center gap-[4rem]'>


    {/* search */}


<div className=''>




<form class="flex items-center" onSubmit={submitHandler}>   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="search" onChange={changeHandler} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>


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
