import { useEffect } from "react";
import Product from "../../components/Product";
import { useProductList } from "../../hooks/useProductList/useProductList";
import Spinner from "../../components/Spinner";
import "./ProductList.css";
import { Amiibo } from "../../services/productList/productList.types";
import { formatPrice } from "../../utils/format";

const ProductList = () => {
  const { data: productList, isLoading, isError } = useProductList();

  const shouldRenderProducts = !isLoading && !isError;

  return (
    <>
      {isLoading && <Spinner />}
      <div className="product-list">
        {shouldRenderProducts &&
          productList.amiibo.map((product: Amiibo, index: number) => (
            <Product
              key={product.tail}
              name={product.name}
              price={formatPrice.format(Math.round(Math.random() * 100000))}
              type={product.type}
              img={product.image}
              buttonText="Add to cart"
              onAddToCart={() => {}}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
