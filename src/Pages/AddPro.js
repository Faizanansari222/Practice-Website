import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { adsInfo } from "../../firebasedConnect/firebaseConnect";

const AddPro = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [adImage, setAdImage] = useState("");
  const navigate = useNavigate();
  
//   const postAds = async (e) => {
//     e.preventDefault()
//     try {
//     //   e.preventDefault();

//       await adsInfo({ title, description, adImage, price });
//       setTitle("")
//       setDescription("")
//       setPrice("")
//       setAdImage("")
//       navigate("/");
// // return true

//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <>
      <div>
        <div class="my-11 max-w-md mx-auto p-8 border bg-white rounded-md shadow-md">
          <h2 class="text-2xl font-bold text-[#002f34] flex justify-center mb-6">
            Add Selling Product
          </h2>
          <form action="#" method="POST">
            <div class="mb-4">
              <label
                for="name"
                class="block text-[#002f34] text-sm font-bold mb-2"
              >
                Product Tilte
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="Title..."
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="block text-[#002f34] text-sm font-bold mb-2"
              >
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="Price in Rs."
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block text-[#002f34] text-sm font-bold mb-2"
              >
                Product Description
              </label>
              <textarea
                id="message"
                onChange={(e) => setDescription(e.target.value)}
                name="message"
                rows="4"
                placeholder="Something about your product"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="file"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Image Upload
              </label>
              <input
                type="file"
                onChange={(e) => setAdImage(e.target.files[0])}
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
            //   onClick={postAds}
              type="submit"
              class="bg-[#002f34] text-white px-4 py-2 rounded-md hover:bg-[#002f34d2] focus:outline-none focus:shadow-outline-blue"
            >
              Post Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPro;
