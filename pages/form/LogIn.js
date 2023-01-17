import React, { useEffect, useState } from 'react'
import { AiFillGoogleCircle,AiFillFacebook } from "react-icons/ai";

import { auth } from '../firebase'
import {signInWithPopup,GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import Button from '../../components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router'
import NotFound from '../404'
// login
const LogIn = () => {

const router=useRouter();



  const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
  const [user,setUser]=useAuthState(auth);



  

 






const submitHandler=(e)=>{
  e.preventDefault();

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      router.push('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

setEmail('')
setPassword('')
}

// login with popUp
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
   {user ?<NotFound/>: <div className='px-[10rem] lg:translate-x-0 md:translate-x-0 -translate-x-10 bg-slate-100 relative  shadow-sm rounded-md lg:mx-[30rem] md:mx-[10rem]  z-20 '>



<form onSubmit={submitHandler}

className='py-10 z-50  flex items-center flex-col'>

<h1 className={`mb-10  font-bold w-[4rem]`}>LOG IN</h1>


<div className='flex items-center flex-col gap-[1rem]'>
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



<div className='h-[.01rem] bg-black w-[17rem] md:w-[18rem] lg:w-[20rem]'></div>

<p>or</p>

<div className=' flex gap-3'>
<button onClick={login} className='text-[2rem]'><AiFillGoogleCircle/></button>
<button className='text-[2rem]' onClick={signInWithFaceBook}><AiFillFacebook/></button>
</div>



</div>



<Button  name={'Submit'}/>

</form>

</div>}
   </>
  )
}

export default LogIn
