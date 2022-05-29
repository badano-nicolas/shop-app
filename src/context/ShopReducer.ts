import { TYPES, Product, ShopContextType } from "../actions/shoppingActions";

export const initialState: ShopContextType = {
  products: [],
  cartItems: [],
};

const findProduct = (products: Product[], productToFind: Product) => {
  return products.find((productFound) => productFound.id === productToFind.id);
};

const shopReducer = (state: ShopContextType, action: any) => {
  const { type, payload } = action;

  console.log(type, payload);

  switch (type) {
    case TYPES.ADD_TO_CART:
      // If the product has stock
      if (payload.amount > 0) {
        const inCart: Product | undefined = findProduct(
          state.cartItems,
          payload
        );
        const inProduct: Product | undefined = findProduct(
          state.products,
          payload
        );

        // If the product is in cart and product will add stock
        if (inProduct) {
          if (inCart) {
            inCart.amount++;
            inProduct.amount--;
          }

          // If the product is not in the cart
          else {
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
      }

      return {
        ...state,
        cartItems: state.cartItems,
      };
    case TYPES.REMOVE_FROM_CART:
      const inCart: Product | undefined = findProduct(state.cartItems, payload);
      const inProduct: Product | undefined = findProduct(
        state.products,
        payload
      );

      if (inCart) {
        if (inCart.amount === 1) {
          const newCartList: Product[] = state.cartItems.filter(
            (productInCart) => productInCart.id !== inCart.id
          );
          return {
            ...state,
            cartItems: newCartList,
          };
        }
        if (inCart.amount > 1) {
          inCart.amount--;

          if (inProduct) {
            inProduct.amount++;
          }
        }
      }

      return {
        ...state,
        cartItems: payload,
      };
    case TYPES.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case TYPES.ADD_PRODUCT:
      const newProduct: Product = payload;

      const lastProduct: Product = state.products[state.products.length - 1];

      newProduct.id = lastProduct.id + 1;

      return {
        ...state,
        products: state.products.push(newProduct),
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
