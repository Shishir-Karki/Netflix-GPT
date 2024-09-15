import React, { useRef, useState } from 'react'
import Header1 from './Header1';
import { checkValidData, checkValidDataSignUp } from '../utils/validate';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Login  = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const name = useRef(null);
    const phonenumber = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
       //Validate the form data

       let msg;
       // Validate based on whether it's Sign In or Sign Up
       if (isSignIn) {
           msg = checkValidData(email.current.value, password.current.value);
       } else {
           msg = checkValidDataSignUp(
               email.current.value,
               password.current.value,
               name.current.value,
               phonenumber.current.value
           );
       }

       setMessage(msg);

       if(msg) return;

       if(!isSignIn){
        // Sign up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser, {
        displayName: name.current.value
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

       }
       else{
        //Sign in

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(error.code+"-"+error.message)
  });
       }


        
       
    }

    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn)
    }
  return (

    <div>
        <Header1/>
        <div className='absolute'>
            <img class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg 1800w" alt="logo"/>


        </div>
        <form onSubmit={(e)=>e.preventDefault()}
        className=' w-3/12 absolute bg-black my-36 p-12 mx-auto right-0 left-0 bg-opacity-75 '>
        <h1 className='text-white text-3xl font-bold mb-4'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        <input
        ref={email}
         type='text' 
         placeholder='Email Address ' 
         className='py-2 m-2 w-full bg-gray-500'
         />
       {!isSignIn&&(
         <div>
        <input 
        ref={name}
         type='text'
          placeholder='Full Name' 
          className='py-2 m-2 w-full bg-gray-500'/>
          <input 
          ref={phonenumber}
         type='number'
          placeholder='Phone Number' 
        className='py-2 m-2 w-full bg-gray-500'/>
         </div>
          

          
       )}
        <input 
        ref={password}
        type='password'
         placeholder='Password ' 
         className='py-2 m-2 w-full bg-gray-500'
         />

         <p className='text-red-400 font-bold p-2'>{message}</p>

        <button className='py-2 m-2 bg-red-600 text-white w-full'
        onClick={handleButtonClick}
        >
            {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-6 text-white cursor-pointer'
        onClick={toggleSignIn}>
             {isSignIn ?
              'Are you new to Netflix? Sign up now' : 
              'Already have an account? Sign In'}
        </p>
        </form>
       </div>
  
  )
}

export default Login;
