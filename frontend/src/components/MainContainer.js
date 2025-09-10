import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store)=>store?.movie?.nowPlayingMovie);
  if (!movies || movies.length === 0) {
    return (
      <p className="text-white text-center mt-10">Loading featured movie...</p>
    );
  }

  const{title, overview, id } = movies[0];
  return (
    <div className="relative w-full h-screen">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
