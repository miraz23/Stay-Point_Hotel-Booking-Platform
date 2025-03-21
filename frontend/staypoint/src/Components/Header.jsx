import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IconUser, IconLogout2, IconUserCircle } from "@tabler/icons-react";
import { logout } from "../actions/userActions";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const isAuthenticated = !!userInfo;
  const userName = userInfo?.name || "User";

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    if (userInfoFromStorage) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfoFromStorage });
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <header className="flex justify-center">
      <div className="absolute top-0 w-[95%] bg-[#fff] font-medium shadow-md rounded-2xl my-5 z-50">
        <div className="flex items-center justify-between py-3 px-5">
          <div className="flex items-center">
            <Link to="/">  
              <h1 className="text-[25px] cursor-pointer bg-gradient-to-r from-cyan-800 to-cyan-500 text-transparent bg-clip-text mt-2" style={{ fontFamily: "Gochi Hand, cursive" }}>
                STAY POINT
              </h1>
            </Link>
          </div>

          <nav className="flex items-center space-x-2">
            <ul className="flex text-[16px] items-center space-x-7">
              <Link to="/"><li className="font-semibold text-[#333] hover:text-[#000] cursor-pointer">Home</li></Link>
              <Link to="/hotels/"><li className="font-semibold text-[#333] hover:text-[#000] cursor-pointer">Hotels</li></Link>
              <Link to="/about-us"><li className="font-semibold text-[#333] hover:text-[#000] cursor-pointer">About Us</li></Link>
              <Link to="/contact-us"><li className="font-semibold text-[#333] hover:text-[#000] cursor-pointer">Contact Us</li></Link>
            </ul>
          </nav>

          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <button onClick={handleLogout} className="cursor-pointer text-gray-700 hover:text-gray-900 transition px-2">
                  <IconLogout2 />
                </button>
                <Link to="/auth/profile">
                  <button className="cursor-pointer flex hover:text-gray-900 text-gray-700">
                    <IconUserCircle />
                    <span className="px-1"> {userName} </span>
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/auth/login">
                <IconUser className="cursor-pointer text-gray-700 hover:text-gray-900" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;