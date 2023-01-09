import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Button from '../components/Button'

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
    <Button name={'Shop Now'}/>
    </Link></div>
{/* image */}

    <div>
  <Image src="/images/pekachu.png" alt="" className='w-[20rem] h-[20rem]' width={4000} height={4000} />
</div>
    </div>




    </>
  )
}
