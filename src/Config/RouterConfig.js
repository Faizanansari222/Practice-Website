import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SignUp from "../Pages/signUp/Signup";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";
import Tour from "../Pages/Tour";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product";
import FirebaseSendData from "../Pages/FirebaseSendData";
// import FirebasePractice from "../Pages/firebasePractice";
// import NavBar from "../Component/Navbar/NavBar";

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
          <Route path="/product" element={<Product/> }/>
          <Route path="/firebase" element={<FirebaseSendData/> }/>
          {/* <Route path="/firebase" element={<FirebasePractice/> }/> */}
          <Route path="/login" element={<Login/> }/>
          <Route path="/*" element={<NotFound/> }/>
        </Routes>
        <Routes>


        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;
