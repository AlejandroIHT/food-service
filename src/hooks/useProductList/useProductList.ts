
import { useQuery } from "@tanstack/react-query";
import { productList } from "../../services/productList/productList";
import { sanitizerData } from "../../utils/services";

const PRODUCT_LIST_QUERY_KEY = "PRODUCT_LIST";

const useProductList = () => {
  const productListResponse = useQuery({ 
    queryKey: [PRODUCT_LIST_QUERY_KEY], 
    queryFn: () => sanitizerData(productList),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return productListResponse;
};

export { useProductList };