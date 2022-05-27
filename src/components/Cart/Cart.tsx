import { useEffect } from "react";
import { Product } from "../../actions/shoppingActions";
import { IoMdTrash } from "react-icons/io";
import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import useShop from "../../context/ShopContext";

const Cart = () => {
  const { cartItems, addProductToCart, removeProductFromCart } = useShop();

  useEffect(() => {}, [cartItems]);

  const total = cartItems?.reduce(
    (previous: any, current: any) => previous + current.amount * current.price,
    0
  );

  const removeAllCartItems = () => {
    cartItems.map((productInCart: Product) => {
      removeProductFromCart(productInCart);
    });
  };

  return (
    <div className="cart-container">
      {cartItems && (
        <div className="cart">
          <div className="cart-header">
            <h2>Carrito</h2>
            <IoMdTrash
              className="cart-icon"
              onClick={() => removeAllCartItems()}
            />
          </div>

          {cartItems.length === 0 ? (
            <p>Tu carrito esta vacio</p>
          ) : (
            <div>
              {cartItems.map((item: Product, i: number) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          )}
          <h3>Pagar total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
