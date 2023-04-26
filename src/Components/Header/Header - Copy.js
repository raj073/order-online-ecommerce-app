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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-3 shadow-lg" : "shadow-sm py-3"
      } fixed w-full z-10 transition-all mb-10`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center">
            <img className="w-11" src={logo} alt="" />
            <span className="ml-2 font-semibold text-lg">Order Online</span>
          </div>
        </Link>

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
      </div>
    </header>
  );
};

export default Header;
