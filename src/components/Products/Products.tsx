import React, { useContext, useEffect, useState } from "react";

import useShop from "../../context/ShopContext";
import { Product } from "../../interfaces/interfaces";
import "./Products.scss";

const Products = () => {
  const { products } = useShop();

  return (
    <div className="products-container">
      {products.map((product: Product, i: number) => (
        <div key={i} className="product">
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.amount}</p>

        </div>
      ))}
    </div>
  );
};

export default Products;
