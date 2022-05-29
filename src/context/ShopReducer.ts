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
      const cartItemAddToCart: Product[] = [...state.cartItems];
      const productsList: Product[] = [...state.products];
      // If the product has stock
      if (payload.amount > 0) {
        const inCart: Product | undefined = findProduct(
          cartItemAddToCart,
          payload
        );
        const inProduct: Product | undefined = findProduct(
          productsList,
          payload
        );

        // If the product is in cart and product will add stock

        if (inCart && inProduct) {
          inCart.amount++;
          inProduct.amount--; // I have to find a better way to write this
        }

        // If the product is not in the cart
        else {
          if (inProduct) {
            inProduct.amount--;
          }
          const newProduct: Product = {
            amount: 1,
            id: payload.id,
            name: payload.name,
            price: payload.price,
          };
          cartItemAddToCart.push(newProduct);
        }
      }

      return {
        ...state,
        cartItems: cartItemAddToCart,
        products: productsList,
      };

    case TYPES.REMOVE_FROM_CART:
      const removeFromCartCartItems: Product[] = [...state.cartItems];
      const removeFromCartProducts: Product[] = [...state.products];

      const removeFromCartInCart: Product | undefined = findProduct(
        removeFromCartCartItems,
        payload
      );
      const removeFromCartInProduct: Product | undefined = findProduct(
        removeFromCartProducts,
        payload
      );

      // If is already in cart
      if (removeFromCartInCart) {
        // If is only one will remove the product from list
        if (removeFromCartInCart.amount === 1) {
          return {
            ...state,
            cartItems: removeFromCartCartItems.filter(
              (productInCart) => productInCart.id !== removeFromCartInCart.id
            ),
            products: removeFromCartProducts,
            //removeFromCartInProduct.amount++;
            // I have to return updated products list
          };
        }
        // If more than one
        if (removeFromCartInCart.amount > 1) {
          removeFromCartInCart.amount--;
          if (removeFromCartInProduct) {
            removeFromCartInProduct.amount++;
          }
        }
      }

      return {
        ...state,
        products: removeFromCartInCart,
        cartItems: removeFromCartCartItems,
      };
    case TYPES.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case TYPES.UPDATE_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case TYPES.ADD_PRODUCT:
      const newProduct: Product = payload;
      const lastProduct: Product = state.products[state.products.length - 1];
      newProduct.id = lastProduct.id + 1;
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
