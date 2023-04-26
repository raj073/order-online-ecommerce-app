import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill, BsFillStarFill } from "react-icons/bs";
import { CartContext } from "../../Contexts/CartContext/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  //Destructuring Product
  const { id, image, title, category, price, rating } = product;
  return (
    <div className="mt-16">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition shadow-lg rounded-tl-lg rounded-br-lg">
        <div className="w-full h-full flex justify-center items-center p-3">
          {/* Image */}
          <div className="w-52 mx-auto flex justify-center items-centerv">
            <img
              className="max-h-40 group-hover:scale-110 transition duration-300"
              src={image}
              alt="logo"
            />
          </div>
        </div>
        <h1>test</h1>
        <div className="absolute top-2 -right-11 group-hover:right-2 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div
              className="flex justify-center items-center text-white 
            w-12 h-12 bg-red-500"
            >
              <BsPlus className="text-3xl cursor-pointer"></BsPlus>
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl cursor-pointer"
          >
            <BsEyeFill></BsEyeFill>
          </Link>
        </div>
      </div>
      {/* Product Category, Title and Price */}
      <div>
        <div className="flex justify-between">
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <div className="text-sm capitalize text-orange-500 mb-1 flex justify-between">
            <BsFillStarFill className="text-orange-500 mt-1 mr-1"></BsFillStarFill>
            {rating.rate}
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/product/${id}`}>
            <h2 className="mb-1">{title.slice(0, 20)}</h2>
          </Link>
          <div className="font-bold">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
