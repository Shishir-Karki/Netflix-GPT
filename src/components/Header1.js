import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'

const Header1 = () => {
  const navigate = useNavigate();
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });

  }
  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
      className='w-44 my-7'
      src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=4'alt="logo"></img>
      <div>
        <button
        onClick={handleSignOut}
         className='m-8 text-white font-bold'>Sign Out</button>
      </div>
    </div>
   
  )
}

export default Header1
