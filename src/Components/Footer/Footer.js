import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../Contexts/SidebarContext/SidebarContext";
import logo from "../../img/logo2.png";
import { RxDoubleArrowUp } from "react-icons/rx";

const Footer = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const scroll = (id_name) => {
    const section = document.querySelector(`#${id_name}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer aria-label="Site Footer" className="bg-gray-400 mt-20 font-primary">
      <div className="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8 lg:pt-16">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          {/* Tooltip */}
          <Link onClick={() => scroll("home")} class="group flex relative">
            <span class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 cursor-pointer">
              <RxDoubleArrowUp></RxDoubleArrowUp>
            </span>
            <span
              class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 
            absolute opacity-0 mt-12 text-center"
            >
              Back to Top
            </span>
          </Link>
          {/* Tooltip */}
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-center text-white lg:justify-start">
              <img className="w-16" src={logo} alt="" />
              <span className="ml-2 font-semibold text-xl">Order Online</span>
            </div>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-white transition hover:text-gray-700/75"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white transition hover:text-gray-700/75"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link className="text-white transition hover:text-gray-700/75">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-6 text-center text-sm text-gray-300 lg:text-right">
          Copyright &copy; 2023. All rights reserved by Order Online @Rajani
          Kanta Das
        </p>
      </div>
    </footer>
  );
};

export default Footer;
