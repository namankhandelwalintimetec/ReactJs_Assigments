import ClipLoader from "react-spinners/ClipLoader";
import { Override } from "./Interface/Interface";
import { SpinnerProps } from "./Interface/Interface";

const Spinner = ({ time }: SpinnerProps) => {
  return (
    <>
      <ClipLoader
        color="#ffffff"
        loading={time}
        cssOverride={Override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Spinner;
