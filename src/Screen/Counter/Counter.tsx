import { useState } from "react";
import Footer from "../../Components/Footer";
import {
  CounterButton,
  Div,
  CounterButtonDiv,
} from "./StyleComponent";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <Div>
        <div>
          <h1 className="counter-text">{count}</h1>
        </div>
        <CounterButtonDiv>
          <CounterButton onClick={increaseCount}>
            <span className="material-symbols-outlined">
              fitbit_arrow_upward
            </span>
          </CounterButton>
          <CounterButton onClick={decreaseCount}>
            <span className="material-symbols-outlined">arrow_downward</span>
          </CounterButton>
          <CounterButton onClick={resetCount}>
            <span className="material-symbols-outlined">restart_alt</span>
          </CounterButton>
        </CounterButtonDiv>
      </Div>
      <Footer content="Counter Asigment" />
    </>
  );
};

export default Counter;
