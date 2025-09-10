import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({movieId}) => {
  const trailerMovie = useSelector((store) => store.movie.movieTrailer);
  useMovieById(movieId)

  if (!trailerMovie?.key) {
    return <p>Loading trailer...</p>; 
  }

  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
