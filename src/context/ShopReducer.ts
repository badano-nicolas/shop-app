import { TYPES, Product } from "../actions/shoppingActions";

export const initialState = {
  total: 0,
  products: [],
  cartItems: [],
};

const shopReducer = (state: any, action: any) => {
  const { type, payload } = action;

  console.log(type, payload);

  switch (type) {
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        total: payload.total,
      };
    case TYPES.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
