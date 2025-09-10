import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
    const { title, movies } = props;
  return (
    <div className="p-4 relative">
      <h1 className="text-white text-2xl font-semibold mb-6">{title}</h1>
      <div className="flex flex-wrap gap-4">
        {
            movies ? movies.map((movie)=>{
                return <MovieCard key={movie.id} data={movie}/>
            }) : <p className="text-white">Loading...</p>
        }
      </div>
    </div>
  );
};

export default MovieList;
