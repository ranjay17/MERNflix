
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieById = (movieId) =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchMoviesTrailer()
    },[])

    const fetchMoviesTrailer = async() =>{
        try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const trailer = response.data.results.filter((item)=>{
            return item.type  === 'trailer'
        });
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : response.data.results[0]))
    } catch (error) {
        console.log(error)
    }
    }
}

export default useMovieById;