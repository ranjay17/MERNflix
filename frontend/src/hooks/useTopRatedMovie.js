import axios from "axios";
import { useEffect } from "react";
import { options, TOP_RATED_MOVIE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
  const fetchTopRatedMovie = async () => {
    try {
      const response = await axios.get(TOP_RATED_MOVIE, options);
      dispatch(getTopRatedMovie(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useTopRatedMovie;
