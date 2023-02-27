import { useState, useEffect, useRef } from "react";
import SubmitButtonImage from "../../Image/SubmitButtonImage.png";
import Footer from "../../Components/Footer";
import { Input } from "./StyledComponents/Assignment3StyleComponent";

const Assigment3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameReferance = useRef<HTMLInputElement>(null);

  const submitFormDataHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setName("");
  };

  const autoFocusing = () => {
    if (nameReferance.current) nameReferance.current.focus();
  };

  useEffect(() => {
    if (nameReferance.current) nameReferance.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={submitFormDataHandler} className="center">
        <label htmlFor="name" className="label-design">
          Name:
        </label>
        <Input
          type="text"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
          ref={nameReferance}
        />
        <label htmlFor="email">Email:</label>
        <Input
          type="text"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <button type="submit" onClick={autoFocusing}>
          <img className="submit-image" src={SubmitButtonImage} />
        </button>
      </form>
      <Footer content="Form Assigment" />
    </>
  );
};

export default Assigment3;
