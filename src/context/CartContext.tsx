import { createContext } from "react";
import { Product } from "../interfaces/interfaces";

export type CartContextProps = {
  cartItems: Array<Product>;
};
export const CartContext = createContext({});
