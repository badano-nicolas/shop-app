import { useEffect, useState } from "react";
import { Product } from "../interfaces/interfaces";
import { CartContext } from "./CartContext";

interface props {
  children: JSX.Element | JSX.Element[];
}
export const CartProvider = ({ children }: props) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localStorageProducts = localStorage.getItem("cartProducts");
      return localStorageProducts ? JSON.parse(localStorageProducts) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item
  const addItemToCart = (product: Product) => {
    const inCart = cartItems.find(
      (productInCart: Product) => productInCart.id === product.id
    );

    if (inCart) {
      setCartItems(
        cartItems.map((productInCart: Product) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else {
            return productInCart;
          }
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    console.log(cartItems);
  };

  // Delete item
  const deleteItemToCart = (product: Product) => {
    const inCart = cartItems.find(
      (productInCart: Product) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter(
          (productInCart: Product) => productInCart.id !== product.id
        )
      );
    } else {
      setCartItems((productInCart: Product) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else return productInCart;
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
