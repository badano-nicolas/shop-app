import useShop from "../../context/ShopContext";
import "./CartItem.scss";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const CartItem = ({ item }: any) => {
  const { addProductToCart, removeProductFromCart } = useShop();

  return (
    <div className="item-container">
      <div className="left">
        <p>{item.name}</p>
        <div className="buttons">
          <button onClick={() => addProductToCart(item)}>
            <IoMdAddCircle />
          </button>
          <button onClick={() => removeProductFromCart(item)}>
            <IoMdRemoveCircle />
          </button>
        </div>
      </div>
      <div className="right">
        <div>{item.amount}</div>
        <p>Total: ${item.amount * item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
