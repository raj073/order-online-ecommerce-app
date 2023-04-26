import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./Contexts/ProductContext/ProductContext";
import SidebarProvider from "./Contexts/SidebarContext/SidebarContext";
import CartProvider from "./Contexts/CartContext/CartContext";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <AuthProvider>
            <App />
          </AuthProvider>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
