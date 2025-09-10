import axios from "axios";
import { useEffect } from "react";
import { options, POPULAR_MOVIE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovie = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
      fetchPopularMovie();
    }, []);
    const fetchPopularMovie = async () => {
      try {
        const response = await axios.get(POPULAR_MOVIE, options);
        dispatch(getPopularMovie(response.data.results));
      } catch (error) {
        console.log(error)
      }
    };
    
}

export default usePopularMovie;