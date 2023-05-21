import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  test("renders correctly", () => {
    const { container } = render(<Layout />);
    expect(container.querySelector(".layout")).toBeInTheDocument();
  });
});
