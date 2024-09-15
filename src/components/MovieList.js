import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    
  
    return (
        <div className='px-6 '>
               <h1 className=' text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll rounded-md '>
             
          
           <div className='flex'>
           {movies && movies.length > 0 ? (  // Ensure `movies` is not null or undefined and has at least one movie
                movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))
            ) : (
                <p>No movies available</p>  // Fallback in case `movies` is empty or null
            )}
           </div>
           </div >
        </div>
    );
};

export default MovieList;
