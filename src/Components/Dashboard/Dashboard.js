import React from "react";

const Dashboard = () => {
  return (
    <div className="pt-24">
      <div className="mx-auto flex justify-between border-b-2 ml-32 mr-32 mb-10 mt-5">
        <h1 className="font-semibold text-2xl pb-5">Admin Order Detail View</h1>
        <h2 className="font-semibold text-2xl">#3 Items</h2>
      </div>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-md border-gray-200 border-[1.5px] bg-white p-6 shadow-lg sm:flex sm:justify-start">
            <img
              src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              alt="productimage"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div
                  className="flex justify-center rounded-lg text-lg"
                  role="group"
                >
                  <button
                    className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 
                  rounded-l-sm h-8 px-4 m-2 mx-0 outline-none focus:shadow-outline"
                  >
                    +
                  </button>
                  <button className="bg-whites border border-blue-500 text-base text-blue-500 h-8 w-12 px-4 m-2 mx-0 outline-none focus:shadow-outline">
                    21
                  </button>
                  <button
                    className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 
                  rounded-r-sm h-8 px-4 m-2 mx-0 outline-none focus:shadow-outline"
                  >
                    -
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-tl-xl rounded-tr-md rounded-bl-md rounded-br-xl border-[1.5px] bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
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
