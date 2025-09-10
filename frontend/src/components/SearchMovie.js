import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { options, TMDB_SEARCH_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie } from "../redux/movieSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const[searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch()
  const movieSearched = useSelector((store)=>store.movie.searchMovie);

  const handleSearchMovie = async(event) =>{
    event.preventDefault();
    try {
      const response = await axios.get(
        `${TMDB_SEARCH_API}/${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      dispatch(getSearchMovie(response.data.results));
    } catch (error) {
      console.log(error)
    }
    setSearchMovie("");
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="flex flex-col items-center pt-20">
        <h1 className="text-3xl font-bold mb-6">Search Movie</h1>

        <form className="w-full max-w-lg" onSubmit={handleSearchMovie}>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Type movie name..."
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="flex-grow px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        {movieSearched && (
          <MovieList title={"Search Results"} movies={movieSearched} />
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
