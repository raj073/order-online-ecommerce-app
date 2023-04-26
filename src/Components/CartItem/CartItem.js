import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../../Contexts/CartContext/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 font-primary">
      <div className="w-full min-h-[150px] flex items-center gap-x-5">
        {/* Image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* Title and Remove Icon */}
          <div className="flex justify-between mb-2">
            {/* Title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* Remove Icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition"></IoMdClose>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Product Quantity */}
            <div className=" flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* Minus Icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove></IoMdRemove>
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* Plus Icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd></IoMdAdd>
              </div>
            </div>
            {/* Item Price */}
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>
            {/* Total Price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
