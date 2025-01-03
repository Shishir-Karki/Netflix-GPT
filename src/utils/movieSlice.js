import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload; // Fixed to set TopRatedMovies
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;