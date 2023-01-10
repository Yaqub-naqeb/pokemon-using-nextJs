import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../pages/firebase';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router=useRouter();
  const [user,setUser]=useAuthState(auth);
    const [navbar, setNavbar] = useState(false);


const clickHandler=()=>{
  router.push('/')
  auth.signOut()
 
}


  return (
    <div>
      {/* Navbar */}
    <Head>
      <meta
        name="description"
        content="Create Next JS Responsive Menu with Tailwind CS"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav className="w-full bg-gray-800 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 align-middle lg:mx-0 md:mx-0 mx-[10rem] ">
              <li className="text-white hover:scale-110 duration-200 transition-all ease-in-out">
                <Link href="/">
                 Home
                </Link>
              </li>
              <li className="text-white hover:scale-110 duration-200 transition-all ease-in-out">
                <Link href="/pokemons">
                 Pokemons
                </Link>
              </li>

              {user ? <li onClick={clickHandler} className="text-white hover:scale-110 duration-200 cursor-pointer transition-all ease-in-out">
               LogOut
              </li>: <><li className="text-white hover:scale-110 duration-200 transition-all ease-in-out">
                <Link href="/form/LogIn">
                  LogIn
                </Link>
              </li>
              <li className="text-white hover:scale-110 duration-200 transition-all ease-in-out">
                <Link href="/form/SignUp">
                 SignUp
                </Link>
              </li></>}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
