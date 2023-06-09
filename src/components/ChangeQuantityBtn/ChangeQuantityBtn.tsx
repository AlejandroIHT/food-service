import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangeQuantityBtnProps } from "./ChangeQuantityBtn.types";
import "./ChangeQuantityBtn.css";

const ChangeQuantityBtn = ({
  quantity,
  onIncreaseClick,
  onDecreaseClick,
  className,
}: ChangeQuantityBtnProps) => {
  return (
    <div className={classNames("change-quantity-btn", className)}>
      <button data-testid="decrease-btn" onClick={onDecreaseClick}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <p>{quantity}</p>
      <button data-testid="increase-btn" onClick={onIncreaseClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ChangeQuantityBtn;
