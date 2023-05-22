import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("should render", () => {
    render(<ErrorMessage errorMessage="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
