import useShop from "../../context/ShopContext";
import { Product } from "../../actions/shoppingActions";
import "./Products.scss";

const Products = () => {
  const { products, addProductToCart, removeProductFromCart } = useShop();

  return (
    <div className="products-container" role={"listitem"}>
      {products.map((product: Product, i: number) => (
        <div key={i} className="card product-card" role={"contentinfo"}>
          <h3>{product.name} </h3>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.amount}</p>
          <button onClick={() => addProductToCart(product)}>
            Agregar al carro
          </button>
          <button onClick={() => removeProductFromCart(product)}>
            Eliminar del carro
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
