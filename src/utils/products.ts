import { ProductDetailInTheCart } from "../pages/ProductList/ProductList.types";
import { formatPrice } from "./format";

export const getTotalCost = (cartItems: ProductDetailInTheCart[]) => formatPrice.format(cartItems
  .map((product) => product.price * product.quantity)
  .reduce((a, b) => a + b, 0));