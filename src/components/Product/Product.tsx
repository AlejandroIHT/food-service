import classNames from "classnames";
import Button from "../Button/Button";
import "./Product.css";
import { ProductProps } from "./Product.types";

const Product = ({
  name,
  price,
  type,
  img,
  buttonText,
  onAddToCart,
  buttonDisabled,
  className,
}: ProductProps) => {
  return (
    <div className={classNames("product", className)}>
      <div className="product__content">
        <span>{type}</span>
        <div className="product__wrapper-img">
          <img src={img} alt="Product" />
        </div>
        <Button onClick={onAddToCart} disabled={buttonDisabled}>
          {buttonText}
        </Button>
      </div>
      <h4>{name}</h4>
      <p>{`${price}`}</p>
    </div>
  );
};

export default Product;
