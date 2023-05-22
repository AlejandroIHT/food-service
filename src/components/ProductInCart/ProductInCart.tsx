import { useDispatch } from "react-redux";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatPrice } from "../../utils/format";
import ChangeQuantityBtn from "../ChangeQuantityBtn/ChangeQuantityBtn";
import { ProductInCartProps } from "./ProductInCart.types";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../../slices/cartSlice";
import "./ProductInCart.css";
import Button from "../Button";

const ProductInCart = ({
  product,
  enableRemoveProduct,
}: ProductInCartProps) => {
  const dispatch = useDispatch();
  const { tail, name, image, quantity, price } = product;

  const handleDecreaseClick = () => dispatch(decreaseQuantity(tail));
  const handleIncreaseClick = () => dispatch(increaseQuantity(tail));
  const handleRemoveClick = () => dispatch(removeItemFromCart(tail));

  return (
    <div
      className={classNames(
        "product-in-cart",
        enableRemoveProduct && "product-in-cart--with-remove"
      )}
    >
      <div className="product-in-cart__wrapper-img">
        <img src={image} alt={name} />
      </div>
      <div className="product-in-cart__information">
        <h5>{name}</h5>
        <p>{formatPrice.format(price)}</p>
      </div>
      <ChangeQuantityBtn
        quantity={quantity}
        onDecreaseClick={handleDecreaseClick}
        onIncreaseClick={handleIncreaseClick}
      />
      {enableRemoveProduct && (
        <Button
          className="product-in-cart__remove-btn"
          onClick={handleRemoveClick}
          data-testid="remove-btn"
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      )}
    </div>
  );
};

export default ProductInCart;
