import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import ProductInCart from "./ProductInCart";
import { productWithQuantityAndPrice } from "../../utils/mocks";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");
const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

describe("ProductInCart", () => {
  beforeEach(() => {
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    jest.clearAllMocks();
  });

  test("renders ProductInCart component", () => {
    render(<ProductInCart product={productWithQuantityAndPrice} />);
    expect(screen.getByText("Mario")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
  });

  test("Should call the dispatch function when the decrease button is clicked", () => {
    render(<ProductInCart product={productWithQuantityAndPrice} />);
    const decreaseButton = screen.getByTestId("decrease-btn");
    userEvent.click(decreaseButton);
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: productWithQuantityAndPrice.tail,
      type: "cart/decreaseQuantity",
    });
  });

  test("Should call the dispatch function when the increase button is clicked", () => {
    render(<ProductInCart product={productWithQuantityAndPrice} />);
    const increaseButton = screen.getByTestId("increase-btn");
    userEvent.click(increaseButton);
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: productWithQuantityAndPrice.tail,
      type: "cart/increaseQuantity",
    });
  });

  test("Should render the remove button when enableRemoveProduct is true", () => {
    render(
      <ProductInCart
        product={productWithQuantityAndPrice}
        enableRemoveProduct
      />
    );
    expect(screen.getByTestId("remove-btn")).toBeInTheDocument();
  });

  test("Should call the dispatch function when the remove button is clicked", () => {
    render(
      <ProductInCart
        product={productWithQuantityAndPrice}
        enableRemoveProduct
      />
    );

    const removeButton = screen.getByTestId("remove-btn");
    userEvent.click(removeButton);
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: productWithQuantityAndPrice.tail,
      type: "cart/removeItemFromCart",
    });
  });
});
