import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { FiTrash2 } from "react-icons/fi";

const DashboardCart = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, category, title, image, price, amount } = item;
  return (
    <div className="justify-between mb-6 rounded-md border-gray-200 border-[1.5px] bg-white p-6 shadow-lg sm:flex sm:justify-start font-primary">
      <img
        src={image}
        alt="productimage"
        className="max-w-[80px] rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
          <p className="mt-1 text-sm font italic text-gray-700">
            Category: {category}
          </p>
          <p className="mt-1 text-md font italic text-orange-700">
            Price: ${price}
          </p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex justify-center rounded-lg text-lg" role="group">
            <button
              onClick={() => increaseAmount(id)}
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 
                  rounded-l-sm h-8 px-4 m-2 mx-0 outline-none focus:shadow-outline"
            >
              +
            </button>
            <button className="bg-whites border border-blue-500 text-base text-blue-500 h-8 w-12 px-4 m-2 mx-0 outline-none focus:shadow-outline">
              {amount}
            </button>
            <button
              onClick={() => decreaseAmount(id)}
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 
                  rounded-r-sm h-8 px-4 m-2 mx-0 outline-none focus:shadow-outline"
            >
              -
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-sm">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </p>
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer py-4 bg-red-500 text-white w-6 h-2 flex justify-center items-center text-xl"
            >
              <FiTrash2></FiTrash2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCart;
