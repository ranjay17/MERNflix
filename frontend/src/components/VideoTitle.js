const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/4 left-10 max-w-lg text-white z-10">
      <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
      <p className="text-lg text-gray-300 mb-6">
       {overview}
      </p>
    </div>
  );
};

export default VideoTitle;
