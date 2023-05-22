import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import * as reactRouterDom from "react-router-dom";
import Checkout from "./Checkout";
import { productWithQuantityAndPrice } from "../../utils/mocks";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");
jest.mock("react-router-dom");

const useNavigateSpy = jest.spyOn(reactRouterDom, "useNavigate");
const useSelectorSpy = jest.spyOn(redux, "useSelector");
const mockNavigateFn = jest.fn();

describe("Checkout", () => {
  beforeEach(() => {
    useSelectorSpy.mockImplementation(() => {
      return [productWithQuantityAndPrice];
    });
    useNavigateSpy.mockReturnValue(mockNavigateFn);
    jest.clearAllMocks();
  });

  test("should render correctly", () => {
    render(<Checkout />);

    expect(screen.getByText("Go back")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Total cost: $10")).toBeInTheDocument();
  });

  test("should call navigate when go back button is clicked", () => {
    render(<Checkout />);

    const goBackBtn = screen.getByText("Go back");
    userEvent.click(goBackBtn);
    expect(mockNavigateFn).toHaveBeenCalledWith("/");
  });
});
