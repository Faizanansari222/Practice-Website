import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import SignUp from "../Component/Pages/signUp/Signup";

import { Navigate } from "react-router-dom";
import NavBar from "./Component/Navbar/NavBar";

function RouterConfig() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;
