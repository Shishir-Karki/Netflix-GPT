import React from 'react'
import Header1 from './Header1'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';




const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
 

  return (
    <div>
      <Header1/>
      <MainContainer/>
      <SecondaryContainer/>
      
      {
        /*
        Main container
        --video background
        --video title
        Secondary conatiner
        --movie list*n
          --cards*n
        */

        
        
      }
    </div>
  )
}

export default Browse
