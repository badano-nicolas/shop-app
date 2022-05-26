import data from "../lib/products.json";
export const initialState = {
  total: 0,
  products: [],
  cartItems: []
};

const shopReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);

      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);

      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };
    case "UPDATE_PRODUCTS":
      console.log("UPDATE_PRODUCTS", payload);
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
