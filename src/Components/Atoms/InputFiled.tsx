interface propsType {
  type: string;
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ type, onChange, placeHolder, value }: propsType) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
