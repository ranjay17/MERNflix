import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { USER_API } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const handleUser = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const user = { email, password };
        const response = await axios.post(`${USER_API}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          dispatch(setUser(response.data.user))
          localStorage.setItem(
            "mernflix_user",
            JSON.stringify(response.data.user)
          );
          localStorage.setItem("mernflix_token", response.data.token);
          navigate('/browse')
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      }
    } else {
      try {
        const user = { fullName, email, password };
        const response = await axios.post(`${USER_API}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          setIsLogin(true)
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-black h-screen w-full relative">
      <Header />
      <div className="absolute h-[80vh] w-full">
        <img
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex items-center justify-center h-full">
        <form
          className="bg-black/80 p-8 rounded-lg w-full max-w-md text-white shadow-lg"
          onSubmit={handleUser}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <div className="flex flex-col space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-700 text-white font-semibold">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <p className="text-lg cursor-pointer" onClick={loginHandler}>
              {isLogin ? "New to Mernflix ?" : "Already have an account ? "}
              <span>{isLogin ? " Sign Up" : "Login"}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
