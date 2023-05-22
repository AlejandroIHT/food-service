import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import userEvent from "@testing-library/user-event";

const dropdownProps = {
  title: "title",
  className: "test",
  onCloseClick: jest.fn(),
  onGoToCheckoutClick: jest.fn(),
};

describe("Dropdown", () => {
  test("renders correctly", () => {
    render(
      <Dropdown
        title={dropdownProps.title}
        onCloseClick={dropdownProps.onCloseClick}
        onGoToCheckoutClick={dropdownProps.onGoToCheckoutClick}
      >
        test
      </Dropdown>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("GO TO CHECKOUT")).toBeInTheDocument();
  });

  test("should call onCloseClick when close button is clicked", () => {
    render(
      <Dropdown
        title={dropdownProps.title}
        onCloseClick={dropdownProps.onCloseClick}
        onGoToCheckoutClick={dropdownProps.onGoToCheckoutClick}
      >
        test
      </Dropdown>
    );

    const closeBtn = screen.getByTestId("close-btn");
    userEvent.click(closeBtn);

    expect(dropdownProps.onCloseClick).toHaveBeenCalled();
  });

  test("should call onGoToCheckoutClick when checkout button is clicked", () => {
    render(
      <Dropdown
        title={dropdownProps.title}
        onCloseClick={dropdownProps.onCloseClick}
        onGoToCheckoutClick={dropdownProps.onGoToCheckoutClick}
      >
        test
      </Dropdown>
    );

    const checkoutBtn = screen.getByText("GO TO CHECKOUT");
    userEvent.click(checkoutBtn);

    expect(dropdownProps.onGoToCheckoutClick).toHaveBeenCalled();
  });
});
