import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("should render the component", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector(".spinner")).toBeInTheDocument();
  });
});
