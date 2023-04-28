import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import DashboardCart from "./DashboardCart";

const Dashboard = () => {
  const { cart, clearAllCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="pt-24 font-primary">
      <div className="mx-auto flex justify-between border-b-2 ml-32 mr-32 mb-10 mt-5">
        <h1 className="font-semibold text-2xl pb-3">Admin Order Detail View</h1>
        <h2 className="font-semibold text-2xl">{itemAmount} Items</h2>
      </div>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((item) => {
            return <DashboardCart item={item} key={item.id}></DashboardCart>;
          })}
        </div>

        <div className="mt-6 h-64 rounded-tl-xl rounded-tr-md rounded-bl-md rounded-br-xl border-[1.5px] bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$ {total} USD</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$ 5.00 USD</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {`$ ${parseFloat(total + 5.0).toFixed(2)}`} USD
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
