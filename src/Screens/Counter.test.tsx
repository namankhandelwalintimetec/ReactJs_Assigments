import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import App from "../App";

test("Check the counter value is render or not ", () => {
  render(<App />);
  const countvalue = screen.getByTestId("count");
  expect(countvalue).toBeInTheDocument();
});

test("check Increse button", () => {
  render(<App />);
  const increaseButton = screen.getByText("+");
  const count = screen.getByTitle("show");
  expect(count.textContent).toBe("0");
  fireEvent.click(increaseButton);
  expect(count.textContent).toBe("1");
});

test("check Decrease button", () => {
  render(<App />);
  const increaseButton = screen.getByText("-");
  let count = screen.getByTitle("show");
  expect(count.textContent).toBe("1");
  fireEvent.click(increaseButton);
  expect(count.textContent).toBe("0");
});
