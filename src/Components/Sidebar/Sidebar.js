import React, { useContext } from "react";
//Import Link
import { Link } from "react-router-dom";
//Import Icons
import { AiFillCloseSquare } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
//Import Sidebar Context
import { SidebarContext } from "../../Contexts/SidebarContext/SidebarContext";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import CartItem from "../../Components/CartItem/CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearAllCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] font-primary`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <AiFillCloseSquare
            size={30}
            className="text-2xl text-red-500"
          ></AiFillCloseSquare>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b h-72">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}></CartItem>;
        })}
      </div>

      <div className="flex flex-col gap-y-3 py-4 mt-2">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Total:&nbsp; $&nbsp;{parseFloat(total).toFixed(2)}
            </span>
          </div>
          {/* Clear Cart Icon */}
          <div
            onClick={clearAllCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2></FiTrash2>
          </div>
        </div>
        <Link
          onClick={handleClose}
          to={"/"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          Continue Shopping
        </Link>
        <Link
          onClick={handleClose}
          to={"/dashboard"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
