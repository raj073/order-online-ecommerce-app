import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { ProductContext } from "../../Contexts/ProductContext/ProductContext";
import { BsFillStarFill, BsChevronDown } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single product based on the product id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //if product not found
  if (!product) {
    return (
      <section>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            <h2 className="text-center text-xl font-semibold mt-4">
              Product is Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  //Destructuring Product
  const { title, price, description, category, image, rating } = product;

  return (
    <section className="pt-20 pb-12">
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="max-w-[400px] lg:max-w-full h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                READY TO SALE
              </h2>
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                {category}
              </h2>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {title}
              </h1>
              <div className="flex mb-4 mt-2">
                <span className="flex items-center">
                  <BsFillStarFill className="text-orange-500 mr-1"></BsFillStarFill>
                  <BsFillStarFill className="text-orange-500 mr-1"></BsFillStarFill>
                  <BsFillStarFill className="text-orange-500 mr-1"></BsFillStarFill>
                  <BsFillStarFill className="text-orange-500 mr-1"></BsFillStarFill>
                  <span className="text-gray-600 ml-3">
                    Rating: {rating.rate}{" "}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  Count: {rating.count}
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <BsChevronDown></BsChevronDown>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {price}
                </span>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="ml-auto relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
