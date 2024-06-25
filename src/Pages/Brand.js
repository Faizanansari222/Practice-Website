import React from "react";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/Navbar/NavBar";


function Brand() {
  return (
    <div>
      <NavBar/>
      
      <h1 className="mt-10 flex justify-center text-5xl font-sans text-gray-800">
        The Brand
      </h1>
      <br />
      <h1 className="flex justify-center text-lg font-thin text-gray-600 italic">
        We love music
      </h1>
      <br />
      <center>
        <p className="flex w-[70%] ">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </center>
      <br />
      <br />
      <div className="flex justify-center">
        <div>
          <h1 className="mb-4 ml-12">Name</h1>
          <img
            className="w-36 mb-28 mr-24"
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="mb-4 ml-12">Name</h1>
          <img
            className="w-36 mb-28 mr-24"
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="mb-4 ml-12">Name</h1>
          <img
            className="w-36 mb-28 "
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Brand;
