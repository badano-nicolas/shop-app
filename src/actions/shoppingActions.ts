export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
};

export interface Product {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export type ShopContextType = {
  products: Product[];
  cartItems: Product[];
};
