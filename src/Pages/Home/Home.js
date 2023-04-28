import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext/ProductContext";
import Product from "../../Components/Product/Product";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  //Get Men's and Women's Clothing

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div className="font-primary" id="home">
      <Hero></Hero>
      <section id="product">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id}></Product>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
