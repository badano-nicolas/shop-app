import { TYPES, Product, ShopContextType } from "../actions/shoppingActions";

export const initialState: ShopContextType = {
  products: [],
  cartItems: [],
};

const shopReducer = (state: ShopContextType, action: any) => {
  const { type, payload } = action;

  console.log(type, payload);

  switch (type) {
    case TYPES.ADD_TO_CART:
      // If the product has stock will continue
      if (payload.amount > 0) {
        const inCart: Product | undefined = state.cartItems.find(
          (productInCart) => productInCart.id === payload.id
        );
        const inProduct: Product | undefined = state.products.find(
          (inProduct) => inProduct.id === payload.id
        );

        // If the product is in cart and product will add stock
        if (inCart && inProduct) {
          inCart.amount++;
          inProduct.amount--;
        }
        // If the product is not in the cart but is in the product
        else if (inProduct) {
          inProduct.amount--;
          const newProduct: Product = {
            amount: 0,
            id: inProduct.id,
            name: inProduct.name,
            price: inProduct.price,
          };

          return {
            ...state,
            cartItems: state.cartItems.push(newProduct),
          };
        }
      }

      return {
        ...state,
        cartItems: state.cartItems,
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case TYPES.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
