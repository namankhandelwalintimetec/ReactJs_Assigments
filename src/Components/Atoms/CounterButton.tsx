interface PropsType {
  name: string;
  buttonAction: () => void;
}

const CounterButton = ({ name, buttonAction }: PropsType) => {
  return (
    <button aria-label="button-name" onClick={buttonAction}>
      {name}
    </button>
  );
};

export default CounterButton;
