import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GPTsearchBar = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://moviebuzz-3.onrender.com/api/movies/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      
      dispatch(addGptMovieResult(data));
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-[50%] md:pt-[10%] flex flex-col items-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={handleSubmit}>
        <input
          className='p-4 m-4 col-span-9'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to watch?"
          disabled={loading}
        />
        <button 
          type='submit' 
          className='col-span-3 py-2 px-4 m-4 bg-red-500 text-white rounded-lg disabled:bg-gray-500'
          disabled={loading || !query.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && (
        <div className="text-red-500 mt-4 bg-black bg-opacity-90 p-4 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default GPTsearchBar;