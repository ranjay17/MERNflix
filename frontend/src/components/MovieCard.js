import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({data}) => {
  const dispatch = useDispatch()
    if(data.poster_path === null){
      return null
    }
    const handleOpen = () =>{
      dispatch(getId(data.id))
      dispatch(setOpen(true))
    }
  return (
    <div 
    className="w-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg -mt-6 hover:-mt-8 transform transition-all duration-300"
    onClick={handleOpen}
    >
      <img
        className="w-full h-72 object-cover"
        src={`${TMDB_IMG_URL}/${data.poster_path}`}
        alt="movie-poster"
      />
    </div>
  );
};

export default MovieCard;
