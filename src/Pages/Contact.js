import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "../Component/Button/Btn";
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/Footer/Footer";
function Contact() {
  return (
    <div>
      <NavBar/>
      <h1 className="flex justify-center text-5xl  text-gray-800 mt-20">
        CONTACT
      </h1>
      <br />
      <h1 className="flex justify-center text-lg font-thin text-gray-600! italic">
        Fan? Drop a note!
      </h1>
      <br />
      <br />
      <div className="flex  justify-evenly  items-center w-full m-auto  mb-40">
        <div className="text-xl ">
          <div>
            <PinDropIcon />
            <span className="ml-3 ">Chicago, US</span>
          </div>
          <div>
            <PhoneIcon />
            <span className="ml-3">Phone: +00 151515</span>
          </div>
          <div>
            <EmailIcon />
            <span className="ml-3">Email: mail@mail.com</span>
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 p-2 rounded-sm "
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-sm mb-3"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              className="border border-gray-400 p-2  w-full"
            />
          </div>
          <div className="flex justify-between mt-3">
            <div></div>
            <Button
              variant="outlined"
              text="SEND"
              className="rounded-none bg-black text-white font-semibold"
            />
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
