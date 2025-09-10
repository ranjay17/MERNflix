import axios from "axios";
import { NOW_PLAYING_MOVIES, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
      fetchNowPlayingMovie();
    },[])
    const fetchNowPlayingMovie = async() =>{
      try {
        const response = await axios.get(NOW_PLAYING_MOVIES, options);
        dispatch(getNowPlayingMovie(response.data.results));
      } catch (error) {
        console.log(error);
      }
    }

}

export default useNowPlayingMovies;