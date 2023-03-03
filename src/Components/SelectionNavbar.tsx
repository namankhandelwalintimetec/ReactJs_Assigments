import { useState } from "react";
import Header from "./Header";
import Counter from "../Screen/Counter/Counter";
import CustomHook from "../Screen/CheckFriendStatus/CheckStatus";
import Form from "../Screen/Form/Form";

const SelectionNavbar = () => {
  const [screenNumber, setScreenNumber] = useState<string>("");

  const screenChanger = (value: string) => {
    if (value === "counter") {
      setScreenNumber("counter");
    } else if (value === "customHook") {
      setScreenNumber("customHook");
    } else {
      setScreenNumber("form");
    }
  };

  return (
    <>
      <Header screenChanger={screenChanger} />
      <div>
        {screenNumber === "counter" && <Counter />}
        {screenNumber === "customHook" && <CustomHook />}
        {screenNumber === "form" && <Form />}
      </div>
    </>
  );
};

export default SelectionNavbar;
