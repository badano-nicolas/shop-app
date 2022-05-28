import useShop from "../../context/ShopContext";
import "./CartItem.scss";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const CartItem = ({ item }: any) => {
  const { addProductToCart, removeProductFromCart } = useShop();

  return (
    <div className="">
      <div className="">
        <p>{item.name}</p>
        <div className="">
          <button onClick={() => addProductToCart(item)}>
            <IoMdAddCircle />
          </button>
          <button onClick={() => removeProductFromCart(item)}>
            <IoMdRemoveCircle />
          </button>
        </div>
      </div>
      <div className="">
        <div>{item.amount}</div>
        <p>Total: ${item.amount * item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
