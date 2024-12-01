import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants'; // Ensure this import is correct
import { changeLanguage } from '../utils/configSlice';
import { useSelector } from 'react-redux'



const Header1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  const handleGPT = () => {
    dispatch(toggleGptSearchView());
  };

  const handeLanguageChange=(e)=>{
    // Add your language change logic here
    dispatch(changeLanguage(e.target.value))

  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        setUser(user);
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        setUser(null);
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unSubscribe();
  }, [dispatch, navigate]);

  return (
    <div className='flex justify-between absolute w-full px-4 py-2 bg-gradient-to-b from-black z-10  flex-col md:flex-row'>
    <div className='flex items-center space-x-3'>
        <div className='flex items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-purple-500"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
          <h1 className='text-white text-2xl font-bold'>MovieBuzz</h1>
        </div>
        </div>
      {user && (
        <div >
         {showGptSearch&&(
           <select className='p-2 bg-gray-500 text-white'
           onChange={handeLanguageChange}
           >
             {SUPPORTED_LANGUAGES.map((lang) => (
               <option key={lang.identifier} value={lang.identifier}>
                 {lang.name}
               </option>
             ))}
           </select>
         )}
          <button 
            onClick={handleGPT}
            className='py-2 px-4 mx-4 font-bold bg-purple-700 text-white'
          >
           {showGptSearch ? 'Home' : 'GPT'}
          </button>
          <button
            onClick={handleSignOut}
            className='m-8 text-white font-bold py-2 px-4 bg-red-500'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header1;
