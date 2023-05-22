import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/format";
import ChangeQuantityBtn from "../ChangeQuantityBtn/ChangeQuantityBtn";
import { ProductInCartProps } from "./ProductInCart.types";
import { decreaseQuantity, increaseQuantity } from "../../slices/cartSlice";
import "./ProductInCart.css";

const ProductInCart = ({ product }: ProductInCartProps) => {
  const dispatch = useDispatch();
  const { tail, name, image, quantity, price } = product;

  const handleDecreaseClick = () => dispatch(decreaseQuantity({ tail }));
  const handleIncreaseClick = () => dispatch(increaseQuantity({ tail }));

  return (
    <div className="product-in-cart">
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
    </div>
  );
};

export default ProductInCart;
