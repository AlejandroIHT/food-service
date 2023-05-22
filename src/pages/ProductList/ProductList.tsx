import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Product from "../../components/Product";
import { useProductList } from "../../hooks/useProductList/useProductList";
import Spinner from "../../components/Spinner";
import { Amiibo } from "../../services/productList/productList.types";
import { formatPrice } from "../../utils/format";
import "./ProductList.css";
import ErrorMessage from "../../components/ErrorMessage";

const ProductList = () => {
  const { data: productList, isLoading, isError } = useProductList();
  const dispatch = useDispatch();

  const shouldRenderProducts = !isLoading && !isError;

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage errorMessage="Something went wrong..." />}
      <div className="product-list">
        {shouldRenderProducts &&
          productList.amiibo.map((product: Amiibo) => {
            const productWithPrice = {
              ...product,
              price: Math.round(Math.random() * 100000),
            };
            return (
              <Product
                key={productWithPrice.tail}
                name={productWithPrice.name}
                price={formatPrice.format(productWithPrice.price)}
                type={productWithPrice.type}
                img={productWithPrice.image}
                buttonText="Add to cart"
                onAddToCart={() => dispatch(addToCart(productWithPrice))}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
