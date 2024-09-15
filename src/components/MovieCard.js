import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 transform hover:scale-110 transition-transform duration-300 ease-in-out'>
      <img alt='movie card' src={IMAGE_URL+posterPath}
      
      />
    </div>
  )
}

export default MovieCard
