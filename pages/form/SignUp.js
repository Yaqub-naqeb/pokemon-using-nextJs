import { Inter } from '@next/font/google';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import {getAuth, createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router';
import NotFound from '../404';
import { AiFillGoogleCircle,AiFillFacebook } from "react-icons/ai";


const inter = Inter({ subsets: ['latin'] })
// signUp
const SignUp = () => {

// const auth = getAuth();
const router=useRouter();
const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');

const [displayName,setDisplayName]=useState('')


const submitHandler=(e)=>{
  e.preventDefault();

setDisplayName(firstName +' '+ lastName)
  createUserWithEmailAndPassword(auth, email,displayName)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  router.push('/')
  setDisplayName('')
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
  router.push('/');
}

// facebook
const signInWithFaceBook=()=>{
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)

  .then((result) => {
    const user = result.user;

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

  });
}

  return (

    <>
    {user?<NotFound/>:<div className='px-[10rem] lg:translate-x-0 md:translate-x-0 -translate-x-10 bg-slate-100 relative  shadow-sm rounded-md lg:mx-[30rem] md:mx-[10rem]  z-20 '>



<form onSubmit={submitHandler}

className='py-10 z-50  flex items-center flex-col'>

<h1 className={`mb-10 ${inter} font-bold w-[4rem]`}>SIGN UP</h1>


<div className='flex items-center flex-col gap-[1rem]'>
<input value={firstName} className='w-[15rem]
border-[#0000b] border-b-2
outline-none
rounded-md p-1
shadow-sm
'

type="text" placeholder='First name' onChange={e=>setFirstName(e.target.value)} />

<input
value={lastName}
className='w-[15rem]
border-[#0000b] border-b-2
outline-none
rounded-md p-1
shadow-sm
'
type="text" placeholder='Last name' onChange={e=>setLastName(e.target.value)} />

<input 
value={email}
className='w-[15rem]
border-[#0000b] border-b-2
outline-none
rounded-md p-1
shadow-sm
'
type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)} />

<input
value={password}
className='w-[15rem]
border-[#0000b] border-b-2
outline-none
rounded-md p-1
shadow-sm
'
type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)} />

<input
value={confirmPassword}
className='w-[15rem]
border-[#0000b] border-b-2
outline-none
rounded-md p-1
shadow-sm
'
type="password" placeholder='Confirm Password' onChange={e=>setConfirmPassword(e.target.value)} />

<div className='h-[.01rem] bg-black w-[17rem] md:w-[18rem] lg:w-[20rem]'></div>

<p className='text-center'>or 
  <br />
  login with
</p>

 <div className=' flex gap-3'>
<button onClick={login} className='text-[2rem]'><AiFillGoogleCircle/></button>
<button className='text-[2rem]' onClick={signInWithFaceBook}><AiFillFacebook/></button>
</div>

</div> 



{/* <button type='submit'>Submit</button> */}
<Button  name={'Submit'} />

</form>

</div>}
    </>
  )

}

export default SignUp
