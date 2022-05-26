import React from "react";
import data from "../../lib/products.json";

const Products = () => {
  return (
    <div>
      {data.products.map((product, i) => (
        <div key={i}>
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Restantes: {product.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
