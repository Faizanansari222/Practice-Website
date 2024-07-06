import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Navbar/Image/ShoppingVilla LOGO 04.png"
import { logOut } from "../../Config/firebase/firebaseMethod";

function NavbarWithAddBtn() { 
    const navigate = useNavigate();
    const [logOutBtn, setLogOutBtn] = useState(false);
    return (
    <div>
      <nav>
      <div className="flex p-1 px-3  bg-black items-center justify-between pr-2">
        <div className="flex justify-between items-center   text-white ">
        <img className="mr-5 w-32 pr-5 h-full "  src={Logo} alt="#" />
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
          {logOutBtn ? (
            <>
              {" "}
              <Link to="/login">
                <Btn
                  variant="contained"
                  className="text-black bg-white"
                  text="Login"
                />
              </Link>
              // <Link>Sign Up</Link>
              <Link to="/signup">
                <Btn
                  onClick={() => {
                    // navigate('./Pages/signUp/Signup')
                  }}
                  variant="outlined"
                  className="text-white border-white"
                  text="Sign Up"
                />
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Btn
                onClick={() => {
                 logOut();
                 setLogOutBtn(true)
                 navigate("/login",{replace:true})
                }}
                variant="outlined"
                className="text-white border-white"
                text="Log Out"
              />
            </>
          )}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarWithAddBtn
