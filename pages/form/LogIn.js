import React, { useEffect } from 'react'

import { auth } from '../firebase'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'


const LogIn = () => {
  const [user,setUser]=useAuthState(auth);

  useEffect(()=>{
    console.log(user);
  },[user])

const googleAuth=new GoogleAuthProvider();
const login=async()=>{
  const result=await signInWithPopup(auth,googleAuth);

}
  return (
    <div>
    <button onClick={login}>login</button>

   {user&&  <h1>welcome {user.displayName}</h1>}

<button onClick={()=>auth.signOut()}>logout</button>

    </div>
  )
}

export default LogIn
