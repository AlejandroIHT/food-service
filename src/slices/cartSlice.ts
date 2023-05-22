import { createSlice } from '@reduxjs/toolkit'
import { Amiibo } from '../services/productList/productList.types';
import { ProductDetailInTheCart } from '../pages/ProductList/ProductList.types';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as ProductDetailInTheCart[],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload as Amiibo;
      const productWithQuantity = { ...product, quantity: 1 };
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
      const indexOfProductInCart = cartFromLocalStorage.findIndex((item: ProductDetailInTheCart) => 
        item.tail === product.tail
      );

      if (indexOfProductInCart === -1) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartFromLocalStorage, productWithQuantity])
        );
        state.cartItems = [...cartFromLocalStorage, productWithQuantity];
      } else {
        cartFromLocalStorage[indexOfProductInCart].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
        state.cartItems = cartFromLocalStorage;
      }
    },
    addAllToCartFromLocalStorage: (state) => {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

      if (cartFromLocalStorage.length !== 0) {
        state.cartItems = [...cartFromLocalStorage];
      }
    },
    removeItemFromCart: (state, action) => {
      const tail = action.payload as string;
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
      const indexOfProductInCart = cartFromLocalStorage.findIndex((item: ProductDetailInTheCart) => 
        item.tail === tail
      );

      if (indexOfProductInCart !== -1) {
        cartFromLocalStorage.splice(indexOfProductInCart, 1);
        localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
        state.cartItems = cartFromLocalStorage;
      }
    },
    increaseQuantity: (state, action) => {
      const tail = action.payload as string;
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
      const indexOfProductInCart = cartFromLocalStorage.findIndex((item: ProductDetailInTheCart) => 
        item.tail === tail
      );

      if (indexOfProductInCart !== -1) {
        cartFromLocalStorage[indexOfProductInCart].quantity++;
        localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
        state.cartItems = cartFromLocalStorage;
      }
    },
    decreaseQuantity: (state, action) => {
      const tail = action.payload as string;
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
      const indexOfProductInCart = cartFromLocalStorage.findIndex((item: ProductDetailInTheCart) => 
        item.tail === tail
      );

      if (indexOfProductInCart !== -1) {
        const shouldRemoveItem = cartFromLocalStorage[indexOfProductInCart].quantity === 1;

        if (shouldRemoveItem) {
          cartFromLocalStorage.splice(indexOfProductInCart, 1);
        } else {
          cartFromLocalStorage[indexOfProductInCart].quantity--;
        }

        localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
        state.cartItems = cartFromLocalStorage;
      }
    }
  },
})

export const { 
  addToCart, 
  addAllToCartFromLocalStorage, 
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;