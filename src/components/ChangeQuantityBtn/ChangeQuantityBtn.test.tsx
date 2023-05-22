import { render, screen } from "@testing-library/react";
import ChangeQuantityBtn from "./ChangeQuantityBtn";
import userEvent from "@testing-library/user-event";

const changeQuantityBtnProps = {
  quantity: "1",
  onIncreaseClick: jest.fn(),
  onDecreaseClick: jest.fn(),
};

describe("ChangeQuantityBtn", () => {
  test("renders correctly", () => {
    render(
      <ChangeQuantityBtn
        quantity={changeQuantityBtnProps.quantity}
        onIncreaseClick={changeQuantityBtnProps.onIncreaseClick}
        onDecreaseClick={changeQuantityBtnProps.onDecreaseClick}
      />
    );

    expect(
      screen.getByText(changeQuantityBtnProps.quantity)
    ).toBeInTheDocument();
  });

  test("should call onIncreaseClick when increase button is clicked", () => {
    render(
      <ChangeQuantityBtn
        quantity={changeQuantityBtnProps.quantity}
        onIncreaseClick={changeQuantityBtnProps.onIncreaseClick}
        onDecreaseClick={changeQuantityBtnProps.onDecreaseClick}
      />
    );

    const increaseBtn = screen.getByTestId("increase-btn");
    userEvent.click(increaseBtn);

    expect(changeQuantityBtnProps.onIncreaseClick).toHaveBeenCalled();
  });

  test("should call onDecreaseClick when decrease button is clicked", () => {
    render(
      <ChangeQuantityBtn
        quantity={changeQuantityBtnProps.quantity}
        onIncreaseClick={changeQuantityBtnProps.onIncreaseClick}
        onDecreaseClick={changeQuantityBtnProps.onDecreaseClick}
      />
    );

    const decreaseBtn = screen.getByTestId("decrease-btn");
    userEvent.click(decreaseBtn);

    expect(changeQuantityBtnProps.onDecreaseClick).toHaveBeenCalled();
  });
});
