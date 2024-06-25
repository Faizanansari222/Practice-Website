import React, { useEffect, useState } from 'react';
import NavBar from '../Component/Navbar/NavBar';
import Footer from '../Component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Navbarr from '../Component/Navbar/Navbar2';

function Product() {

  
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);


  const detailPageFun =  ()=>{
navigate("/productdetail")
  }
  return (
    <div>
      <Navbarr/>
      <NavBar />
      <div  className="grid grid-cols-1  mt-10 mb-10 ml-5 sm:container sm:mx-auto md:ml-3 md:mr-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div onClick={detailPageFun} key={product.id} className="bg-white  hover:shadow-lg  pointer-events-auto focus:cursor-pointer rounded-lg overflow-hidden  ring-4 ring-black hover:ring-red-400 hover:transition-all ring-opacity-40 max-w-sm">
            <div className="relative ">
              <div className=' h-80  flex items-center justify-center'>
              <img className="w-52 " src={product.image} alt={product.title} />
              </div>
          <div className="absolute  top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mt-5 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">${product.price}</span>
                <button className="flex justify-end bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Product;
