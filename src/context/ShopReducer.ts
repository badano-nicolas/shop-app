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

  switch (type) {
    case TYPES.ADD_TO_CART:
      const cartItemAddToCart: Product[] = [...state.cartItems];
      const productsList: Product[] = [...state.products];
      // If the product has stock

      const inCart: Product | undefined = findProduct(
        cartItemAddToCart,
        payload
      );
      const inProduct: Product | undefined = findProduct(productsList, payload);

      if (inProduct && inProduct.amount > 0) {
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
      const cartItemsRemove: Product[] = [...state.cartItems];
      const productsListRemove: Product[] = [...state.products];
      const inCartRemove: Product | undefined = findProduct(
        cartItemsRemove,
        payload
      );
      const inProductsRemove: Product | undefined = findProduct(
        productsListRemove,
        payload
      );

      // If is already in cart
      if (inCartRemove) {
        // If is only one will remove the product from list
        if (inCartRemove.amount === 1) {
          if (inProductsRemove) {
            inProductsRemove.amount++;
          }
          return {
            ...state,
            cartItems: cartItemsRemove.filter(
              (productInCart) => productInCart.id !== inCartRemove.id
            ),
            products: productsListRemove,
          };
        }
        // If more than one
        if (inCartRemove.amount > 1) {
          inCartRemove.amount--;
          if (inProductsRemove) {
            inProductsRemove.amount++;
          }
        }
      }
      return {
        ...state,
        products: productsListRemove,
        cartItems: cartItemsRemove,
      };
    case TYPES.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case TYPES.UPDATE_CART_LIST:
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
