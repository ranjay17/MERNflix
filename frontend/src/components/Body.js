import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SearchMovie from "./SearchMovie";

const Body = () => {
    const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      },
      {
        path: '/search',
        element: <SearchMovie />
      }
    ]);
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
