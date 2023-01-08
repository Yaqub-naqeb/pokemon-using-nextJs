import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className='flex lg:flex-row md:flex-row flex-col gap-[5rem] justify-around items-center'>




    <div className='flex flex-col items-center'> 
    <div className='lg:text-3xl md:text-2xl text-2xl font-bold text-center'>
    <h1 className=" ">
      Step into the world of 
    </h1>
    <h1 className={`${inter} `}>
      Pokemon detective  
    </h1>
  
    </div>


    <Link href={'/pokemons'}>
    <button className='bg-transparent hover:bg-[#1F2937] text-[#1F2937] font-semibold hover:text-white py-2 px-4 border border-[#1F2937] mt-[3rem] hover:border-transparent rounded duration-500 ease-in-out transition-all'>
     Shop Now
    </button>
    </Link></div>
{/* image */}

    <div>
  <Image src="/images/pekachu.png" alt="" className='w-[20rem] h-[20rem]' width={4000} height={4000} />
</div>
    </div>




    </>
  )
}
