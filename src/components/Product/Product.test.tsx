import { render, screen } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";

const product = {
  name: "Cheese Pizza",
  price: "52",
  type: "pizza",
  img: "img",
  buttonText: "Add to cart",
  onAddToCart: jest.fn(),
  buttonDisabled: false,
  className: "product",
};

describe("Product", () => {
  test("renders correctly", () => {
    render(
      <Product
        name={product.name}
        price={product.price}
        type={product.type}
        img={product.img}
        buttonText={product.buttonText}
        onAddToCart={product.onAddToCart}
        buttonDisabled={product.buttonDisabled}
        className={product.className}
      />
    );
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`${product.price}`)).toBeInTheDocument();
    expect(screen.getByText(product.type)).toBeInTheDocument();
    expect(screen.getByText(product.buttonText)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("calls onAddToCart when button is clicked", () => {
    render(
      <Product
        name={product.name}
        price={product.price}
        type={product.type}
        img={product.img}
        buttonText={product.buttonText}
        onAddToCart={product.onAddToCart}
        buttonDisabled={product.buttonDisabled}
        className={product.className}
      />
    );
    const addToCartButton = screen.getByText(product.buttonText);
    userEvent.click(addToCartButton);
    expect(product.onAddToCart).toHaveBeenCalled();
  });

  test("disables button when buttonDisabled is true", () => {
    render(
      <Product
        name={product.name}
        price={product.price}
        type={product.type}
        img={product.img}
        buttonText={product.buttonText}
        onAddToCart={product.onAddToCart}
        buttonDisabled={true}
        className={product.className}
      />
    );
    const addToCartButton = screen.getByText(product.buttonText);
    userEvent.click(addToCartButton);
    expect(addToCartButton).toBeDisabled();
    expect(product.onAddToCart).not.toHaveBeenCalled();
  });
});
