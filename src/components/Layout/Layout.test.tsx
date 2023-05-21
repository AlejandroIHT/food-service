import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  test("renders correctly", () => {
    render(<Layout>children</Layout>);
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
