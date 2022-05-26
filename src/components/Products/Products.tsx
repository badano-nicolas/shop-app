import React from "react";
import data from "../../lib/products.json";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products-container">
      {data.products.map((product, i) => (
        <div key={i} className="product">
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Restantes: {product.amount}</p>
          <button onClick={() => console.log(product)}>Agregar al carro</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
