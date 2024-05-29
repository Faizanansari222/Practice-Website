import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SignUp from "../Component/Pages/signUp/Signup";
import Home from "../Component/Pages/signUp/Home";
import Brand from "../Component/Pages/signUp/Brand";
import Tour from "../Component/Pages/signUp/Tour";
import Contact from "../Component/Pages/signUp/Contact";
import NotFound from "../Component/Pages/NotFound";

// import { Navigate } from "react-router-dom";
// import NavBar from "./Component/Navbar/NavBar";

function RouterConfig() {
  return (
    <div>
        {/* <NavBar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/brand" element={<Brand/> }/>
          <Route path="/tour" element={<Tour/> }/>
          <Route path="/contact" element={<Contact/> }/>
          <Route path="/signup" element={<SignUp/> }/>
          <Route path="/*" element={<NotFound/> }/>
        </Routes>
        <Routes>


        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;
