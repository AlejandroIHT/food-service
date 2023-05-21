import { Amiibo } from "../../services/productList/productList.types";

export interface ProducrListInCart extends Amiibo {
  quantity: number;
}