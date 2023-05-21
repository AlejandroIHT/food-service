import { createSlice } from '@reduxjs/toolkit'
import { Amiibo } from '../services/productList/productList.types';
import { ProducrListInCart } from '../pages/ProductList/ProductList.types';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as ProducrListInCart[],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload as Amiibo;
      const productWithQuantity = { ...product, quantity: 1 };
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
      const indexOfProductInCart = cartFromLocalStorage.findIndex((item: ProducrListInCart) => 
        item.tail === product.tail
      );

      if (indexOfProductInCart === -1) {
        localStorage.setItem(
          "cart",
          JSON.stringify([productWithQuantity, ...cartFromLocalStorage])
        );
        state.cart = [productWithQuantity, ...cartFromLocalStorage];
      } else {
        cartFromLocalStorage[indexOfProductInCart].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
        state.cart = cartFromLocalStorage;
      }
    },
    addAllToCartFromLocalStorage: (state) => {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

      if (cartFromLocalStorage.length !== 0) {
        state.cart = [...cartFromLocalStorage];
      }
    }
  },
})

export const { addToCart, addAllToCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;