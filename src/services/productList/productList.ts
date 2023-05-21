import { httpRequest } from "../service.config";

const productList = () => {
  return httpRequest.get("amiibo/");
};

export { productList };