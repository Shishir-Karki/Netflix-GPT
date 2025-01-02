import React from 'react';
import { IMAGE_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, posterPath }) => {
  if (!movie || (!movie.poster_path && !posterPath)) return null; // Validate inputs

  const imagePath = posterPath || movie.poster_path;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-36 md:w-48 pr-4 hover:scale-110 transition duration-300">
        <div className="relative">
          <img
            src={IMAGE_URL + imagePath}
            alt={movie.title || "Movie Poster"}
            className="rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black text-white opacity-0 hover:opacity-100 transition-opacity">
            <h3 className="text-sm font-bold">{movie.title}</h3>
            <p className="text-xs mt-1">⭐ {movie.vote_average?.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;