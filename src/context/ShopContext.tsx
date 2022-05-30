import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "./ShopReducer";
import productsData from "../lib/products.json";
import { TYPES, Product } from "../actions/shoppingActions";

type ShopContextType = {
  products: Product[];
  cartItems: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  addNewProduct: (product: Product) => void;
};

const ShopContext = createContext<ShopContextType>({
  ...initialState,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  addNewProduct: () => {},
});

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ShopProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    const sortedCartItems = getStoredCartItems();
    if (state.products.length < 1) {
      if (sortedCartItems) {
        loadCartList(sortedCartItems);
      }
      initProducts(productsData.products);
    }
  }, [state]);

  const setLocalStorage = (value: any) => {
    try {
      window.localStorage.setItem("cartItems", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  // should be specific with type
  const getStoredCartItems: any = () => {
    try {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {}
  };

  const addProductToCart = (product: Product) => {
    console.log("addProductToCart - shopContext");
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: product,
    });
    setLocalStorage(state.cartItems);
  };

  const removeProductFromCart = (product: Product) => {
    console.log("removeProductFromCart - shopContext");
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload: product,
    });
    setLocalStorage(state.cartItems);
  };

  const initProducts = (products: Array<Product>) => {
    console.log("initProducts - shopContext");
    dispatch({
      type: TYPES.UPDATE_PRODUCTS,
      payload: products,
    });
  };

  const loadCartList = (products: Array<Product>) => {
    console.log("loadCart - shopContext");
    dispatch({
      type: TYPES.UPDATE_CART_LIST,
      payload: products,
    });
  };

  const addNewProduct = (product: Product) => {
    console.log("addNewProduct - shopContext");
    dispatch({
      type: TYPES.ADD_PRODUCT,
      payload: product,
    });
  };

  const value = {
    products: state.products,
    cartItems: state.cartItems,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
    addNewProduct: addNewProduct,
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
