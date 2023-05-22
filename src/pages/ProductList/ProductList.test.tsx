import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import ProductList from "./ProductList";
import { product } from "../../utils/mocks";
import { useProductList } from "../../hooks/useProductList/useProductList";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");
const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

jest.mock("../../hooks/useProductList/useProductList");
const mockUseProductList = useProductList as jest.MockedFunction<
  typeof useProductList
>;

describe("ProductList", () => {
  beforeEach(() => {
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    mockUseProductList.mockReturnValue({
      data: { amiibo: [product] },
      isLoading: false,
      isError: false,
    } as any);
    jest.clearAllMocks();
  });

  test("should render correctly", () => {
    render(<ProductList />);

    expect(mockUseProductList).toHaveBeenCalled();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
    expect(screen.getByText("Mario")).toBeInTheDocument();
    expect(screen.getByText("Figure")).toBeInTheDocument();
  });

  test("should render loading", () => {
    mockUseProductList.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    } as any);
    const { container } = render(<ProductList />);

    expect(mockUseProductList).toHaveBeenCalled();
    expect(screen.queryByText("Mario")).not.toBeInTheDocument();
    expect(container.querySelector(".spinner")).toBeInTheDocument();
  });

  test("should call dispatch when click on add to cart", () => {
    render(<ProductList />);

    const addToCartBtn = screen.getByText("Add to cart");
    userEvent.click(addToCartBtn);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
});
