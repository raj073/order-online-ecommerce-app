import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
};

export default Main;
