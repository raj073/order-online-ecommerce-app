import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../Contexts/SidebarContext/SidebarContext";
import { BsBag } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo2.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("User Signed out Successfully", {
          position: "top-right",
        });
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-right",
        });
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <nav
      className={`${
        isActive ? "py-1 shadow-2xl" : "py-1"
      } bg-white fixed w-full z-10 transition-all mb-10`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/" className="flex">
              <img className="h-6 w-auto sm:h-10" src={logo} alt="" />
              <span className="ml-3 md:mt-2 text-gray-800 text-2xl font-primary">
                Order Online
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer py-2 px-1 relative border-2 border-transparent text-gray-800 rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out hover:scale-110 md:hidden"
            >
              <BsBag className="text-2xl mt-2"></BsBag>
              <span className="absolute inset-0 object-right-top -mr-6">
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white font-primary">
                  {itemAmount}
                </div>
              </span>
            </button>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center sm:items-center space-y-8 md:flex md:space-x-10 md:space-y-0 font-primary">
              <li
                style={{ textUnderlineOffset: "8px" }}
                className="text-gray-900 font-semibold transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li
                style={{ textUnderlineOffset: "8px" }}
                className="text-gray-900 font-semibold transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                <Link onClick={() => setIsOpen(!isOpen)} to={"/"}>
                  Cart
                </Link>{" "}
              </li>
              <li
                style={{ textUnderlineOffset: "8px" }}
                className="text-gray-900 font-semibold transition duration-300 focus:outline-none focus:text-purple-600 focus:underline hover:underline hover:text-purple-600"
              >
                <Link to={"/"}>Blog</Link>{" "}
              </li>
            </ul>

            <div className="mt-5 space-y-2 lg:hidden md:hidden">
              <Link
                to={"/signin"}
                className="inline-block w-full rounded-sm px-6 py-2 text-base text-center bg-gray-300 text-black hover:bg-teal-700 hover:text-white duration-300 font-primary"
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="inline-block w-full rounded-sm px-6 py-2 text-base text-center bg-blue-500 text-white hover:bg-blue-700 duration-300 font-primary"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden space-x-2 md:inline-block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer py-2 px-1 relative border-2 border-transparent text-gray-800 rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out hover:scale-110"
          >
            <BsBag className="text-2xl mt-2"></BsBag>
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white font-primary">
                {itemAmount}
              </div>
            </span>
          </button>
          &nbsp;&nbsp;
          {user?.uid ? (
            <>
              {/* Avatar */}
              <div className="hidden lg:inline-block rounded-full bg-gray-200 pr-5 h-10 leading-10 cursor-pointer">
                {user?.photoURL ? (
                  <img
                    className="rounded-full float-left h-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <HiUserCircle
                    size={55}
                    className="rounded-full float-left h-full -ml-[10px] fill-blue-500 hover:fill-blue-800"
                  ></HiUserCircle>
                )}{" "}
                <span className="ml-1 font-medium font-primary hover:text-blue-800">
                  {user?.displayName}
                </span>
              </div>
              <Link
                onClick={handleSignOut}
                className="bg-yellow-500 hover:bg-orange-700 py-2 px-4 rounded-lg text-black border-b-4 border-yellow-700 hover:border-orange-800 hover:text-white transition duration-300 font-semibold font-primary"
              >
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/signin"}
                className="rounded-sm px-4 py-2 text-base bg-gray-300 text-black hover:bg-teal-700 hover:text-white duration-300 font-primary"
              >
                Sign in
              </Link>
              &nbsp;&nbsp;
              <Link
                to={"/signup"}
                className="rounded-sm px-4 py-2 text-base bg-blue-500 text-white hover:bg-blue-700 font-primary transition duration-150 ease-in-out hover:scale-110"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
