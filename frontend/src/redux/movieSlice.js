import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: [],
    popularMovie: [],
    topRatedMovie: [],
    upcomingMovie: [],
    movieTrailer: null,
    searchMovie: null,
    open: false,
    id: "",
  },
  reducers: {
    getNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    getTrailerMovie : (state, action) =>{
      state.movieTrailer = action.payload;
    },
    getSearchMovie: (state, action) =>{
      state.searchMovie = action.payload;
    },
    setOpen: (state, action) =>{
      state.open = action.payload;
    },
    getId: (state,action)=>{
      state.id = action.payload;
    }
  },
});

export const { getNowPlayingMovie, getPopularMovie, getTopRatedMovie, getUpcomingMovie, getTrailerMovie,
   getSearchMovie, setOpen, getId} = movieSlice.actions;
export default movieSlice.reducer;
