import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import data from "../utils/usercontext";
import UserContext from "../utils/usercontext";

const Header = () => {
  const userData = useContext(UserContext);
  console.log(userData)
  const [btnName, setBtnName] = useState("Login");

  // If dependency array is [btnName] => useEffect will called when btnName value changed
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  return (
    <div className="flex justify-between items-center bg-sky-200 p-4">
      <div className="">
        <img src={LOGO_URL} className="w-28 cursor-pointer" />
      </div>
      <div className="">
        <ul className="flex uppercase font-medium cursor-pointer text-lg">
          <li className="mr-8">
            Online Status:{" "}
            {useOnlineStatus() ? (
              <span className="network-status online"></span>
            ) : (
              <span className="network-status offline"></span>
            )}
          </li>
          <li className="mr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-8">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-8">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mr-8">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {userData?.name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
