import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrease, Increase, Reset } from "../Actions/Index";
import CounterButton from "../Atoms/CounterButton";
import InputField from "../Atoms/InputFiled";
import { Card } from "./CounterCardStyle";

interface StateType {
  changeState: number;
}

const CounterCard = () => {
  const [increament, setIncreament] = useState<string>("1");
  const [decreament, setDecreament] = useState<string>("1");
  const countState = useSelector((state: StateType) => state.changeState);
  const dispatch = useDispatch();

  const buttonInfo = [
    {
      name: "+",
      buttonAction: function () {
        if (Number(increament) <= 0) {
          alert("please input right Value");
        } else {
          dispatch(Increase(increament));
        }
      },
    },
    {
      name: "-",
      buttonAction: function () {
        if (Number(decreament) <= 0) {
          alert("please input right value");
        } else {
          dispatch(Decrease(decreament));
        }
      },
    },
    {
      name: "Reset",
      buttonAction: function () {
        dispatch(Reset());
      },
    },
  ];

  const InputFieldInfo = [
    {
      type: "number",
      placeholder: "Up",
      value: increament,
      onchange: setIncreament,
    },
    {
      type: "number",
      placeholder: "Down",
      value: decreament,
      onchange: setDecreament,
    },
  ];

  return (
    <Card data-testid="count">
      <h1>Counter Application </h1>
      {InputFieldInfo.map((item) => (
        <InputField
          type={item.type}
          placeHolder={item.placeholder}
          value={item.value}
          onChange={item.onchange}
        ></InputField>
      ))}
      <p title="show">{countState}</p>
      {buttonInfo.map((item) => (
        <CounterButton name={item.name} buttonAction={item.buttonAction} />
      ))}
    </Card>
  );
};

export default CounterCard;
