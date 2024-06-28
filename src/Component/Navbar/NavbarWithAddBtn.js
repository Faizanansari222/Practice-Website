import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import SearchIcon from "@mui/icons-material/Search";

function NavbarWithAddBtn() {
    const navigate = useNavigate();
  return (
    <div>
      <nav>
      <div className="flex bg-black items-center justify-between pr-2">
        <div className="flex  text-white ">
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
              className="px-2 rounded-full"
            />
            <button className="p-2 pr-4 mx-0 rounded-r-full hover:bg-red-600 hover:text-white">
              <SearchIcon />
            </button>
          </div>
          <Link to="/addproduct">
            <Btn
            variant= ""
              className="text-black font-bold text-3xl p-0 rounded-full  bg-white"
              text="+"
            />
          </Link>
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
    </div>
  )
}

export default NavbarWithAddBtn