import classNames from "classnames";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button = ({
  children,
  onClick,
  disabled,
  type,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames("button", className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
