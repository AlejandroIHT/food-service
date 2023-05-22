import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DropdownProps } from "./Dropdown.types";
import "./Dropdown.css";
import Button from "../Button";

const Dropdown = ({
  children,
  title,
  totalCost,
  className,
  goToCheckoutDisabled,
  onCloseClick,
  onGoToCheckoutClick,
}: DropdownProps) => {
  return (
    <div className={classNames("dropdown", className)}>
      <div className="dropdown__header">
        <h4>{title}</h4>
        <button data-testid="close-btn" onClick={onCloseClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="dropdown__content">{children}</div>
      <p className="dropdown__total-cost">{`TOTAL COST: ${totalCost}`}</p>
      <Button
        className="dropdown__checkout-btn"
        disabled={goToCheckoutDisabled}
        onClick={onGoToCheckoutClick}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default Dropdown;
