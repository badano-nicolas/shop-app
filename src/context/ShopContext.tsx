import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "./ShopReducer";
import productsData from "../lib/products.json";
import { TYPES, Product } from "../actions/shoppingActions";

type ShopContextType = {
  products: Product[];
  cartItems: Product[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const ShopContext = createContext<ShopContextType>({
  ...initialState,
  addToCart: () => {},
  removeFromCart: () => {},
});

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
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
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
