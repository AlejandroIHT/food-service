import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./Header.css";
import Dropdown from "../Dropdown";
import ProductInCart from "../ProductInCart";
import { ProductDetailInTheCart } from "../../pages/ProductList/ProductList.types";
import { useMemo, useState } from "react";
import { getTotalCost } from "../../utils/products";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const productListInTheCart = useSelector(
    (state: { cart: { cartItems: ProductDetailInTheCart[] } }) =>
      state.cart.cartItems
  );

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const totalCost = useMemo(
    () => getTotalCost(productListInTheCart),
    [productListInTheCart]
  );
  const shouldBeDisabledTheGoToCheckoutBtn = useMemo(
    () => productListInTheCart.length === 0,
    [productListInTheCart]
  );

  return (
    <>
      {isDropdownOpen && (
        <Dropdown
          className="header__dropdown"
          title="Products in the cart"
          totalCost={totalCost}
          goToCheckoutDisabled={shouldBeDisabledTheGoToCheckoutBtn}
          onCloseClick={handleDropdownClick}
          onGoToCheckoutClick={() => ({})}
        >
          {productListInTheCart.map((product) => (
            <ProductInCart key={product.tail} product={product} />
          ))}
        </Dropdown>
      )}
      <header className="header">
        <nav>
          <h1>FoodService</h1>
          <Button onClick={handleDropdownClick}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
