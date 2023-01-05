// https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/4.json

export async function getStaticPaths() {
  const res=await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    const data=await res.json()


    const paths=data.map(pk=>{
      return{
        params:{id:pk.id.toString()}
      }
    })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {

const id=context.params.id;

const res=await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
const data= await res.json();



  return {
    // Passed to the page component as props
    props: { pk: data },
  }
}




import Image from 'next/image'
import React from 'react'
import Level from '../../components/power/Level'
const PokInfo = ({pk}) => {
  console.log(pk);
  return (
    <div className='text-center flex flex-col items-center gap-[5rem]'>
    
   
<div className='text-center  prose lg:prose-xl items-center'>
<h3 className='font-bold'>name : {pk.name}</h3>
<h4>type : {pk.type}</h4>
</div>
    
 
    <div className='flex   justify-between gap-[25rem] '>
{/* propeties */}

<ol>
  {pk.stats.map(power=><Level key={power.name} power={power}/>)}
</ol>


    {/* image */}
    <div>
<Image className='lg:h-[22rem]  lg:w-[22rem]' alt={pk.name}  src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/'+pk.image}  width={200} height={200}
    />
</div>


    </div>






    </div>
  
  )
}

export default PokInfo
