import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import Logo from "./Image/ShoppingVilla LOGO 04.png"
import SearchIcon from "@mui/icons-material/Search";
// import SignUp from "../Pages/signUp/Signup";
function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed  z-10 right-0 left-0 top-0">
      <div className="flex bg-black items-center px-5   justify-between pr-2">
        <div className="flex  text-white   justify-between items-center">
          <img className="mr-5 w-24 h-full "  src={Logo} alt="#" />
          <Btn
            onClick={() => {
              navigate("/");
            }}
            variant="Contained"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            text="Home"
            sx="mt:1"
          />

          <Link to="/brand">
            <Btn
              variant="Contained"
              text="Brand"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none "
            />
          </Link>
          <Link to="/tour">
            <Btn
              variant="Contained"
              text="Tour"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            />
          </Link>
          <Link to="/product">
            <Btn
              variant="Contained"
              text="Product"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            />
          </Link>
          <Link to="/contact">
            <Btn
              variant="Contained"
              text="Contact"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            />
          </Link>
        </div>
        <div></div>
        <div className="flex items-center gap-2 text-black">
          <div className="bg-white m-3 h-10 rounded-full flex items-center   pl-2">
            <input
              placeholder="Search...."
              type="text"
              className="px-2 outline-none rounded-full"
            />
            <button className="p-2 pr-4 mx-0 rounded-r-full hover:bg-red-600 hover:text-white">
              <SearchIcon />
            </button>
          </div>
          <Link to="/login">
            <Btn
              variant="contained"
              className="text-black bg-white"
              text="Login"
            />
          </Link>
          {/* <Link >Sign Up</Link> */}
          <Link to="/signup">
            {" "}
            <Btn
              onClick={() => {
                // navigate('./Pages/signUp/Signup')
              }}
              variant="outlined"
              className="text-white border-white"
              text="Sign Up"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
