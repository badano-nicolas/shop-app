import useShop from "../../context/ShopContext";
import { Product } from "../../actions/shoppingActions";
import "./Products.scss";

const Products = () => {
  const { products, addToCart, removeFromCart } = useShop();

  return (
    <div className="products-container">
      {products.map((product: Product, i: number) => (
        <div key={i} className="product">
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.amount}</p>
          <button onClick={() => addToCart(product)}>Agregar al carro</button>
          <button onClick={() => removeFromCart(product)}>
            Eliminar del carro
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
