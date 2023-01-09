import { Inter } from '@next/font/google';
import React, { useState } from 'react'
import Button from '../../components/Button';
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



  return (
    <div className=' bg-slate-100 relative  shadow-sm rounded-md mx-[20rem] z-20'>



     <form onSubmit={submitHandler}
     
     className='py-10 z-50  flex items-center flex-col'>

<h1 className={`mb-10 ${inter} font-bold `}>SIGN UP</h1>


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
</div>


{/* <button type='submit'>Submit</button> */}
<Button  name={'Submit'}/>

     </form>
    </div>
  )
}

export default SignUp
