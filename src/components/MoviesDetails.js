import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const apiKey = '6edc27994f4bd91777c2f71dcfbe8b5c'; // Replace with your TMDB API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,similar`
        );
        const data = await response.json();
        setMovieDetails(data);
  
        const validMovies = (data?.similar?.results || []).filter((movie) => movie?.id);
        setSimilarMovies(validMovies);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);
  

  if (!movieDetails) return <div className="text-center mt-20 text-lg text-white">Loading...</div>;

  // Safely retrieve the trailer
  const trailer = movieDetails?.videos?.results?.find((video) => video.type === 'Trailer');

  return (
    <div className="px-6 py-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-white">{movieDetails.title}</h2>

      {/* Trailer Section */}
      <div className="flex justify-center my-6">
        {trailer ? (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={movieDetails.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        ) : (
          <div className="text-lg text-gray-400">Trailer not available</div>
        )}
      </div>

      {/* Movie Details Section */}
      <div className="text-white space-y-3">
        <p>
          <span className="font-semibold">Release Date:</span> {movieDetails.release_date}
        </p>
        <p>
          <span className="font-semibold">Overview:</span> {movieDetails.overview}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {movieDetails.vote_average} / 10
        </p>
        <p>
          <span className="font-semibold">Genres:</span>{' '}
          {movieDetails.genres.map((genre) => genre.name).join(', ')}
        </p>
      </div>

      {/* Similar Movies Section */}
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Similar Movies</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {similarMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesDetails;
