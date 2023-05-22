import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ProductInCart from "../../components/ProductInCart";
import "./Checkout.css";
import { ProductDetailInTheCart } from "../ProductList/ProductList.types";
import { useMemo } from "react";
import { getTotalCost } from "../../utils/products";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const productListInTheCart = useSelector(
    (state: { cart: { cartItems: ProductDetailInTheCart[] } }) =>
      state.cart.cartItems
  );
  const navigation = useNavigate();

  const handleGoBackClick = () => navigation("/");

  const totalCost = useMemo(
    () => getTotalCost(productListInTheCart),
    [productListInTheCart]
  );

  return (
    <div className="checkout">
      <div className="checkout__header">
        <Button className="checkout__go-back-btn" onClick={handleGoBackClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Go back
        </Button>
        <h2>Checkout</h2>
      </div>
      <div>
        {productListInTheCart.map((product) => (
          <ProductInCart
            key={product.tail}
            product={product}
            enableRemoveProduct
          />
        ))}
      </div>
      <h5>{`Total cost: ${totalCost}`}</h5>
    </div>
  );
};

export default Checkout;
