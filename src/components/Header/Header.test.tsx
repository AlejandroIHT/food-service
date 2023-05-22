import { act, render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import * as reactRouterDom from "react-router-dom";
import Header from "./Header";
import { productWithQuantityAndPrice } from "../../utils/mocks";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");
jest.mock("react-router-dom");

const useNavigateSpy = jest.spyOn(reactRouterDom, "useNavigate");
const useSelectorSpy = jest.spyOn(redux, "useSelector");
const mockNavigateFn = jest.fn();

describe("Header", () => {
  beforeEach(() => {
    useSelectorSpy.mockImplementation(() => {
      return [productWithQuantityAndPrice];
    });
    useNavigateSpy.mockReturnValue(mockNavigateFn);
    jest.clearAllMocks();
  });

  test("renders Header component", () => {
    render(<Header />);
    expect(screen.getByText("FoodService")).toBeInTheDocument();
  });

  test("Should open the dropdown when the cart button is clicked", () => {
    render(<Header />);
    const openDropdownButton = screen.getByRole("button");
    act(() => userEvent.click(openDropdownButton));

    expect(screen.getByText("Products in the cart")).toBeInTheDocument();
    expect(screen.getByText("GO TO CHECKOUT")).toBeInTheDocument();
    expect(screen.getByText("TOTAL COST: $10")).toBeInTheDocument();
    expect(screen.getByText("Mario")).toBeInTheDocument();
  });

  test("Should be disabled the go to checkout button when the cart is empty", () => {
    useSelectorSpy.mockImplementation(() => {
      return [];
    });
    render(<Header />);
    const openDropdownButton = screen.getByRole("button");
    act(() => userEvent.click(openDropdownButton));

    expect(screen.getByText("Products in the cart")).toBeInTheDocument();

    const goToCheckoutButton = screen.getByText("GO TO CHECKOUT");
    act(() => userEvent.click(goToCheckoutButton));

    expect(mockNavigateFn).not.toBeCalledWith("/checkout");
  });
});
