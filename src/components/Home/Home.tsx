import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Products></Products>
      <Cart></Cart>
    </div>
  );
};

export default Home;
