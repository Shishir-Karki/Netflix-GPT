import React, { useEffect } from 'react';
import { API_OPTIONS, YT_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const trailer = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            const filteredData = json.results.filter((video) => video.name === "Official Trailer");
            const mainTrailer = filteredData.length ? filteredData[0] : json.results[0];
            if (mainTrailer) {
                dispatch(addTrailerVideo(mainTrailer));
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        trailer();
    }, [movieId]);

    return (
        <div className="w-screen">
            {trailerVideo && trailerVideo?.key ? (
                <iframe
                    className="w-screen aspect-video"
                    src={`${YT_URL}${trailerVideo?.key}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            ) : (
                <p>Loading trailer...</p>
            )}
        </div>
    );
};

export default VideoBackground;