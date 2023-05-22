import { Amiibo } from "../../services/productList/productList.types";

export interface ProductDetailInTheCart extends Amiibo {
  quantity: number;
  price: number;
}