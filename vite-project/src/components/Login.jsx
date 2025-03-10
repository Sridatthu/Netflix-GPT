import React, { useRef } from 'react'
import Header from './Header'
import {useState} from "react"
import { checkValidData } from '../utils/validate'
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { BG, USER_AVATAR } from '../utils/constants'

const Login = () => {
  const [errorMessage,SetErrorMessage]=useState(null)
  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)
const dispatch=useDispatch()
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value,password.current.value);
    SetErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: USER_AVATAR,
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
               dispatch(
                 addUser({
                   uid: uid,
                   email: email,
                   displayName: displayName,
                   photoURL: photoURL,
                 })
               );
        
      })
      .catch((error) => {
        SetErrorMessage(error.message);
      });
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorCode+" "+errorMessage)

  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorCode+" "+errorMessage)
  });

    }
  }
  return (
    <div>
      <Header/>
    <div className="absolute">
    <img className="h-screen object-cover" src={BG_URL} alt="logo" />
    </div>
      <form onSubmit={(e)=>e.preventDefault()}     className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
      {!isSignInForm && <input ref={name} type="text" placeholder="Full Name"  className="p-3 my-4 w-full bg-gray-700"/>}
          <input ref={email} type="text" placeholder="email"  className="p-3 my-4 w-full bg-gray-700"/>
          <input ref={password} type="password" placeholder="password" className="p-3 my-4 w-full bg-gray-700" />
          <p className='py-1 text-lg font-bold text-red-600'>{errorMessage}</p>
           <button className="p-3 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>Sign In</button>
           <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
           {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
           </p>
      </form>
    </div>
  )
}

export default Login
