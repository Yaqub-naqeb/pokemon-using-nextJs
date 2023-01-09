import { Inter } from '@next/font/google';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import { auth } from '../firebase'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'

const inter = Inter({ subsets: ['latin'] })


const SignUp = () => {
const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');


const submitHandler=(e)=>{
  e.preventDefault();

  console.log(firstName+lastName+email+confirmPassword);
  
setFirstName('')
setLastName('')
setEmail('')
setPassword('')
setConfirmPassword('')
}
// 



  const [user,setUser]=useAuthState(auth);

  useEffect(()=>{
    console.log(user);
  },[user])

const googleAuth=new GoogleAuthProvider();
const login=async()=>{
  const result=await signInWithPopup(auth,googleAuth);

}



  return (
    <div className='px-[10rem] lg:translate-x-0 md:translate-x-0 -translate-x-10 bg-slate-100 relative  shadow-sm rounded-md lg:mx-[30rem] md:mx-[10rem]  z-20 '>



     <form onSubmit={submitHandler}
     
     className='py-10 z-50  flex items-center flex-col'>

<h1 className={`mb-10 ${inter} font-bold w-[4rem]`}>SIGN UP</h1>


<div className='flex items-center flex-col gap-[1rem]'>
  <input  className='w-[15rem]
  border-[#0000b] border-b-2
  outline-none
  rounded-md p-1
  shadow-sm
  '
  
  type="text" placeholder='First name' onChange={e=>setFirstName(e.target.value)} />

  <input
  className='w-[15rem]
  border-[#0000b] border-b-2
  outline-none
  rounded-md p-1
  shadow-sm
  '
  type="text" placeholder='Last name' onChange={e=>setLastName(e.target.value)} />

  <input 
  className='w-[15rem]
  border-[#0000b] border-b-2
  outline-none
  rounded-md p-1
  shadow-sm
  '
  type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)} />

  <input
  className='w-[15rem]
  border-[#0000b] border-b-2
  outline-none
  rounded-md p-1
  shadow-sm
  '
  type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)} />

  <input
  className='w-[15rem]
  border-[#0000b] border-b-2
  outline-none
  rounded-md p-1
  shadow-sm
  '
  type="password" placeholder='Confirm Password' onChange={e=>setConfirmPassword(e.target.value)} />

<div className='h-[.01rem] bg-black w-[17rem] md:w-[18rem] lg:w-[20rem]'></div>

<p>or</p>
<button onClick={login}>Login with Google</button>




</div>



{/* <button type='submit'>Submit</button> */}
<Button  name={'Submit'}/>

     </form>
   
    </div>
  )
}

export default SignUp
