import { ErrorMessageProps } from "./ErrorMessage.types";
import "./ErrorMessage.css";

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
