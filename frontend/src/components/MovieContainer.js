import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store)=>store.movie);
  return (
    <div className="bg-black">
      <div className="mt-50 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovie} />
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovie} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovie} />
      </div>
    </div>
  );
}

export default MovieContainer
