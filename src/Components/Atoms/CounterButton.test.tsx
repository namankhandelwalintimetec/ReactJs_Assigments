import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterButton from "./CounterButton";
import { fireEvent } from "@testing-library/react";

test("Displays a heading", () => {
  render(
    <CounterButton
      name={"+"}
      buttonAction={() => console.log("hii my name is naman khandelwal")}
    />
  );
  const heading = screen.getByRole("button", { name: /button-name/i });
  expect(heading).toBeInTheDocument();
});
