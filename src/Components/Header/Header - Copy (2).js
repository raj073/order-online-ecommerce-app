import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../Contexts/SidebarContext/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo2.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-lg" : "shadow-md"
      } fixed w-full z-10 transition-all mb-5`}
    >
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-content-center justify-items-center justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex">
                <img className="h-6 w-auto sm:h-10" src={logo} alt="" />
                <span className="ml-3 mt-2 text-gray-800 text-xl md:block hidden">
                  Order Online
                </span>
              </Link>{" "}
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link
                to="/"
                style={{ textUnderlineOffset: "8px" }}
                className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                style={{ textUnderlineOffset: "8px" }}
                className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                Cart
              </Link>
              <Link
                to={"/"}
                style={{ textUnderlineOffset: "8px" }}
                className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                Blog
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* Cart */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex relative"
              >
                <BsBag className="text-2xl"></BsBag>
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[][18px] text-white rounded-full flex justify-center items-center">
                  {itemAmount}
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to={"/signin"}
                className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white shadow-lg py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Sign in</span>
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <Link
                to={"/signup"}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-purple-600 rounded group-hover:bg-purple-600"></span>
                <span className="relative text-black group-hover:text-white">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* For Mobile Menu */}

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="order" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-1 place-content-center place-items-center gap-y-5 gap-x-5">
                <Link
                  to={"/"}
                  style={{ textUnderlineOffset: "8px" }}
                  className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  style={{ textUnderlineOffset: "8px" }}
                  className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
                >
                  Cart
                </Link>
                <Link
                  to={"/"}
                  style={{ textUnderlineOffset: "8px" }}
                  className="text-base font-medium text-gray-800 transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  to={"/signup"}
                  className="px-5 py-2.5 relative rounded group font-medium text-white inline-block w-full text-center"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
