import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const GPTmovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  if (!gptMovies) return null;

  return (
    <div className='px-6 bg-black bg-opacity-90 min-h-screen'>
      <h2 className='text-3xl py-4 text-white'>Recommended Movies</h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        {gptMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GPTmovieSuggestions;