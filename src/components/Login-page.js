import React, { useState } from 'react'
import Header1 from './Header1';

const Login  = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn)
    }
  return (

    <div>
        <Header1/>
        <div className='absolute'>
            <img class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg 1800w" alt="logo"/>


        </div>
        <form className=' w-3/12 absolute bg-black my-36 p-12 mx-auto right-0 left-0 bg-opacity-75 '>
        <h1 className='text-white text-3xl font-bold mb-4'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        <input
         type='text' 
         placeholder='Email Address ' 
         className='py-2 m-2 w-full bg-gray-500'
         />
       {!isSignIn&&(
         <div>
            <input 
         type='text'
          placeholder='Full Name' 
          className='py-2 m-2 w-full bg-gray-500'/>
          <input 
         type='number'
          placeholder='Phone Number' 
          className='py-2 m-2 w-full bg-gray-500'/>
         </div>
          

          
       )}
        <input 
        type='password'
         placeholder='Password ' 
         className='py-2 m-2 w-full bg-gray-500'
         />

        <button className='py-2 m-2 bg-red-600 text-white w-full'>
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
