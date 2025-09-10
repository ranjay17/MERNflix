import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_API } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${USER_API}/logout`);
      if (response.data.success) {
        toast.success(response.data.message);
      }
      dispatch(setUser(null));
      localStorage.removeItem("mernflix_user");
      localStorage.removeItem("mernflix_token");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-900 to-black shadow-md">
      <Link to='/browse'>
        <h1 className="text-white font-serif text-2xl font-extrabold tracking-wide">
          MERN<span className="text-red-500">flix</span>
        </h1>
      </Link>
      {user ? (
        <div className="flex items-center space-x-6">
          <span className="text-white text-lg font-medium">
            {user.fullName}
          </span>
          <div className="flex space-x-3">
            {location.pathname !== "/search" && (
              <Link to="/search">
                <button className="px-4 py-1 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200">
                  Search Movie
                </button>
              </Link>
            )}
            {location.pathname === "/search" && (
              <Link to="/browse">
                <button className="px-4 py-1 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200">
                  Home
                </button>
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
