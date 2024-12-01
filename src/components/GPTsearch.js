import React from 'react';
import GPTsearchBar from './GPTsearchBar';
import GPTmovieSuggestions from './GPTmovieSuggestions';
import { BG_SRCSET_URL, BG_URL } from '../utils/constants';

const GPTsearch = () => {
  return (
  <>
   <div className='absolute -z-10'>
   <img
          className='h-screen w-screen object-cover '
          src={BG_URL}
          srcSet={BG_SRCSET_URL}
          alt="background"
        />
      </div>
  
    <div className=''>
     
       
      <GPTsearchBar />
      <GPTmovieSuggestions />
    </div>
  </>
  );
};

export default GPTsearch;
