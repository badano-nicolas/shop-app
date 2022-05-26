import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "./ShopReducer";
import { Product } from "../interfaces/interfaces";
import productsData from "../lib/products.json";

const ShopContext = createContext(initialState);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ShopProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    console.log();
    if (state.products.length < 1) {
      initProducts(productsData.products);
    }
  });

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products: Array<Product>) => {
    let total = 0;
    products.forEach((product: Product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const initProducts = (products: Array<Product>) => {
    dispatch({
      type: "UPDATE_PRODUCTS",
      payload: {
        products,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
