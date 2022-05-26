import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import data from "../../lib/products.json";
import "./Products.scss";

const Products = () => {
  const cartContext: any = useContext(CartContext);

  return (
    <div className="products-container">
      {data.products.map((product, i) => (
        <div key={i} className="product">
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Restantes: {product.amount}</p>
          <button onClick={() => cartContext.addItemToCart(product)}>
            Agregar al carro
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
