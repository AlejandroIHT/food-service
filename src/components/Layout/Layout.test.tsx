import { render } from "@testing-library/react";
import * as redux from "react-redux";
import Layout from "./Layout";

jest.mock("../Header");
jest.mock("react-redux");
const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

describe("Layout", () => {
  beforeEach(() => {
    useDispatchSpy.mockReturnValue(mockDispatchFn);
  });
  test("renders correctly", () => {
    const { container } = render(<Layout />);
    expect(container.querySelector(".layout")).toBeInTheDocument();
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
  });
});
