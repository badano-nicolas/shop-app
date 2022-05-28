import { useEffect } from "react";
import { Product } from "../../actions/shoppingActions";
import { IoMdTrash } from "react-icons/io";
import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import useShop from "../../context/ShopContext";

const Cart = () => {
  const { cartItems, removeProductFromCart } = useShop();

  useEffect(() => {}, [cartItems]);

  let total = cartItems?.reduce(
    (previous: any, current: any) => previous + current.amount * current.price,
    0
  );

  const removeAllCartItems = () => {
    /*cartItems.map((productInCart: Product) => {
      removeProductFromCart(productInCart);
    });*/
  };

  return (
    <div className="cart-container card">
      {cartItems && (
        <div className="items-container">
          <div className="header-container">
            <h2>Carrito</h2>
            <button onClick={() => removeAllCartItems()}>
              <IoMdTrash />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p>Tu carrito esta vacio</p>
          ) : (
            <div className="cart-content-container">
              <div className="table-container">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: Product, i: number) => (
                      <CartItem key={i} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
              <h3>Total: ${total}</h3>
              <button>Pagar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
