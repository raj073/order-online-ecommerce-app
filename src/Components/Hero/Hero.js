import React from "react";
import woman from "../../img/sale.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-32 w-full">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* PreTitle */}
          <div className="font-semibold flex items-center uppercase pl-3">
            <div className="w-14 h-1 bg-orange-400 mr-3"></div>
            ALL New Trend
            <div className="w-14 h-1 bg-orange-400 ml-3"></div>
          </div>
          {/* Hero Title */}
          <h1 className="text-[50px] leading-[1.5] font-semibold mb-4">
            FLASH AUTUMN SALE <br />
            <span className="text-[40px] font-normal">DRESS FOR EVERYONE</span>
          </h1>
          <Link
            to={"/"}
            className="w-44 relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Discover More
            </span>
          </Link>
        </div>
        {/* image */}
        <div className="hidden md:block lg:block">
          <img className="h-[464px] w-96" src={woman} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
