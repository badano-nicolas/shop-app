import React, { useContext } from "react";
import useShop from "../../context/ShopContext";
import "./CartItem.scss";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const CartItem = ({ item }: any) => {
  const { cartItems } = useShop();

  const { amount } = item;

  return (
    <div className="item-container">
      <div className="left">
        <p>{item.name}</p>
        <div className="buttons">
          <button
           
          >
            <IoMdAddCircle />
          </button>
          <button
           
          >
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
