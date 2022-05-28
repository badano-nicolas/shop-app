import useShop from "../../context/ShopContext";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const CartItem = ({ item }: any) => {
  const { addProductToCart, removeProductFromCart } = useShop();

  return (
    <tr className="">
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>
        <IoMdRemoveCircle
          onClick={() => removeProductFromCart(item)}
          className="table-icon"
        />
        <IoMdAddCircle
          onClick={() => addProductToCart(item)}
          className="table-icon"
        />
      </td>
    </tr>
  );
};

export default CartItem;
