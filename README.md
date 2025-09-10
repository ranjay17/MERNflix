🚀 MERNflix
🌟 Frontend Features

Header Component for navigation and user actions (Logout, Search Movie, Home).

Login and Sign Up Forms with seamless toggling between modes.

Client-side Routing using React Router:

/ → Login Page

/browse → Browse Movies Page

/search → Search Movie Page

Styled with Tailwind CSS for responsive and modern design.

User State Management with Redux Toolkit.

Persisted user session using localStorage.

userSlice manages logged-in user state.

Protected Routes: Users cannot access the Browse or Search page without login.

Logged-in user’s full name displayed in the header.

Logout functionality clears Redux state and localStorage.

🎥 Movie Browsing Page (Browse)

Displays dynamic movie content from TMDB API.

Four Movie Categories:

Now Playing Movies

Popular Movies

Top Rated Movies

Upcoming Movies

Data fetched via custom hooks:

useNowPlayingMovies

usePopularMovie

useTopRatedMovie

useUpcomingMovie

Each movie displayed using MovieCard component with poster image.

Movies grouped by category using MovieList component.

🔍 Search Movie Feature

Implemented using SearchMovie component.

Search movies by name via TMDB Search API.

Results shown dynamically in the same style as movie browsing.

🎬 Movie Dialog Modal

Movie trailer modal implemented using Material UI Dialog component.

Uses useMovieById custom hook to fetch trailer dynamically.

Trailer displayed in embedded YouTube iframe.

🚀 Backend Features

Express.js Server setup.

Environment Variables Configured using .env.

MongoDB Connection configured in db.js.

User model defined using Mongoose.

User Authentication Flow:

Register new users with hashed password (bcryptjs).

Login with JWT Authentication (token valid for 1 day).

Logout API implemented (frontend handles token removal).

Backend sends authenticated user data and token to frontend.

Clean and modular structure:

Routes: /user/register, /user/login, /user/logout

Controllers handle business logic.

⚡ State Management

movieSlice.js handles:

nowPlayingMovie

popularMovie

topRatedMovie

upcomingMovie

movieTrailer

searchMovie

Dialog state: open/close and current movie ID

🛠️ Miscellaneous

Resolved CORS issues by using proper CORS middleware.

Axios configured to send credentials.

Clean project structure with organized folders for:

components

hooks

redux slices

utils (constants and helpers)