import React from "react";
import RecipeReviewCard from "../Component/Card/card";
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/Footer/Footer";

function Tour() {
  return (<>
    <NavBar/>
    <div className="mt-16 bg-black flex justify-center text-white">

      <div className="container">
        <div className="my-9 ">
          <h1 className="text-4xl mb-4">
            <center>TOUR DATES</center>
          </h1>
          <h1 className="font-medium italic text-gray-400">
            <center>Remumber to book your tickets!</center>
          </h1>
        </div>
        <div className="w-[70%] mx-auto  ">
          
            <div>
              <div className="bg-white flex gap-7 px-3 items-center border mx-5">
                <h1 className="text-gray-400">September</h1>
                <h1 className="m-2 p-1 px-2 font-semibold text-white bg-red-500">
                  Sould Out
                </h1>
              </div>
              <div className="bg-white flex gap-7 px-3 items-center border mx-5">
                <h1 className="text-gray-400">Octuber</h1>
                <h1 className="m-2 p-1 px-2 font-semibold text-white bg-red-500">
                  Sould Out
                </h1>
              </div>
              <div className="bg-white justify-between p-3 px-2 flex gap-7 items-center border mx-5 mb-9">
                <h1 className="text-gray-400">November</h1>
                <h1 className=" px-3 py-1 font-semibold mr-7  rounded-full  text-white bg-black">
            3
          </h1>
              </div>
            </div>
            <div className="flex  justify-center gap-2 mx-auto w-[96%] mb-10">
            <RecipeReviewCard image ='https://www.w3schools.com/w3images/paris.jpg' date='Fri 27 Nov 2016' text='New York'/>
            <RecipeReviewCard image='https://www.w3schools.com/w3images/paris.jpg' date='Sat 28 Nov 2016' text='Paris'/>
            <RecipeReviewCard image='https://www.w3schools.com/w3images/sanfran.jpg' date='Fri 29 Nov 2016' text='San Francisco'/>
            </div>
        </div>
      </div>
    </div>
      <Footer/>
</>
  );
}

export default Tour;
