import axios from "axios";
import { useEffect } from "react";
import { options, UPCOMING_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/movieSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUpcomingMovie();
  }, []);
  const fetchUpcomingMovie = async () => {
    try {
      const response = await axios.get(UPCOMING_MOVIES, options);
      dispatch(getUpcomingMovie(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useUpcomingMovie;
