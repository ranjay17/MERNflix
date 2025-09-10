export const USER_API = "http://localhost:8000/user"; 

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGUxMGQyMGE4YzIxMjU5MDA0YTZhNjkyZTgxMjQzMiIsIm5iZiI6MTcyMjk2NjM5MS4wNzIsInN1YiI6IjY2YjI2MTc3NzQ0ZGI3MGFjOGU1M2ExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maHSpCFzeW7f9vOQ5iTcdsM7ybceQPSJd6CoCSCuDUM",
  },
};

export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing";

export const POPULAR_MOVIE = "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIE = "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const TMDB_SEARCH_API = "https://api.themoviedb.org/3/search/movie?query=";




