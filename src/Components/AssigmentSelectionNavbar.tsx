import { useState } from "react";
import Assigment1 from "../Screen/Assignment1/Assignment1";
import Assigment2 from "../Screen/Assignment2/Assignment2";
import Assigment3 from "../Screen/Assignment3/Assignment3";
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
        {(() => {
          if (screenNumber === 1) return <Assigment1 />;
          else if (screenNumber === 2) return <Assigment2 />;
          else return <Assigment3 />;
        })()}
      </div>
    </>
  );
};

export default AssigmentSelectionNavbar;
