import { useState } from "react";
import Assigment1 from "../Screen/Counter/Counter";
import Assigment2 from "../Screen/CheckFriendStatus/CheckStatus";
import Assigment3 from "../Screen/Form/Form";
import Header from "./Header";

const AssigmentSelectionNavbar = () => {
  const [screenNumber, setScreenNumber] = useState<number>(1);

  const screenChanger = (value: number) => {
    if (value === 1) {
      setScreenNumber(1);
    } else if (value === 2) {
      setScreenNumber(2);
    } else {
      setScreenNumber(3);
    }
  };

  return (
    <>
      <Header screenChanger={screenChanger} />
      <div>
        {(screenNumber === 1) && (<Assigment1 />)}
        {(screenNumber === 2) && (<Assigment2 />)}
        {(screenNumber === 3) && (<Assigment3 />)}
      </div>
    </>
  );
};

export default AssigmentSelectionNavbar;
