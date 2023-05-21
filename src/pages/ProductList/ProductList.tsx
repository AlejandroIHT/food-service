import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Product from "../../components/Product";
import { useProductList } from "../../hooks/useProductList/useProductList";
import Spinner from "../../components/Spinner";
import { Amiibo } from "../../services/productList/productList.types";
import { formatPrice } from "../../utils/format";
import "./ProductList.css";

const ProductList = () => {
  const { data: productList, isLoading, isError } = useProductList();
  const dispatch = useDispatch();

  //TODO: MOVE TO CART COMPONENT
  /*const cart = useSelector(
    (state: { cart: ProducrListInCart[] }) => state.cart
  );*/

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
              onAddToCart={() => dispatch(addToCart(product))}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
