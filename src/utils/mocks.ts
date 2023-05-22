import { Amiibo } from "../services/productList/productList.types";

export const product = {
  amiiboSeries: "Super Smash Bros.",
  character: "Mario",
  gameSeries: "Super Mario",
  head: "00000000",
  image: "image",
  name: "Mario",
  tail: "00302010",
  type: "Figure",
} as Amiibo;

export const productWithQuantityAndPrice = {
  ...product,
  quantity: 1,
  price: 10,
}