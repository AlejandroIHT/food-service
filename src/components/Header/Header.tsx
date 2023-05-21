import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>FoodService</h1>
        <Button>
          <FontAwesomeIcon icon={faCartShopping} />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
