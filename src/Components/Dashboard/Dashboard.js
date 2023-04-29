import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import DashboardCart from "./DashboardCart";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const { cart, clearAllCart, total, itemAmount } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center font-primary text-4xl font-bold">
        <h1>There is no Item in the Shopping Cart</h1>
        <br />
        <span>PLease Keep Shopping</span>
      </div>
    );
  }

  const handleSubmitPLaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const cardName = form.cardHolderName.value;
    const cardNo = form.cardNo.value;
    const cardExpiry = form.cardExpiry.value;
    const cardCVC = form.cardCVC.value;
    console.log(email, cardName, cardNo, cardExpiry, cardCVC);

    form.reset();
    toast.success(
      `$ ${parseFloat(total + 5.0).toFixed(
        2
      )} USD Payment has been Completed Successfully`,
      {
        position: "top-right",
      }
    );
    clearAllCart();
  };

  return (
    <div className="pt-24 font-primary">
      <div className="mx-auto flex justify-between border-b-2 ml-20 mr-20 mb-10 mt-5">
        <h1 className="font-semibold text-2xl pb-3">Admin Order Detail</h1>
        <h2 className="font-semibold text-2xl">{itemAmount} Items</h2>
      </div>
      <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-4 xl:px-0">
        <div className="rounded-lg md:w-3/5">
          {cart.map((item) => {
            return <DashboardCart item={item} key={item.id}></DashboardCart>;
          })}
        </div>

        <form
          onSubmit={handleSubmitPLaceOrder}
          className="mt-6 h-full rounded-tl-xl rounded-tr-md rounded-bl-md rounded-br-xl border-[1.5px] bg-white p-6 shadow-md md:mt-0 md:w-2/5"
        >
          {/* payment detail */}

          <div className="mt-5 px-1 pt-5 lg:mt-0">
            <p className="text-2xl font-semibold text-center">
              Payment Details
            </p>
            <div className="mt-3 border-t"></div>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Your Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={user?.email}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="cardHolderName"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cardHolderName"
                  name="cardHolderName"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Full Name"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="cardNo"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="cardNo"
                    name="cardNo"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="cardExpiry"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />{" "}
                &nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="cardCVC"
                  className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>

              <div className="mt-6 border-t py-2"></div>
            </div>
          </div>

          {/* payment detail */}

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
            Make Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
