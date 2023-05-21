import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();

describe("Button", () => {
  test("renders correctly", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders correctly with className", () => {
    render(<Button className="test">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("test");
  });

  test("renders correctly with disabled", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByText("Test")).toBeDisabled();
  });

  test("should call onClick", () => {
    render(<Button onClick={onClick}>Test</Button>);
    const button = screen.getByText("Test");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
