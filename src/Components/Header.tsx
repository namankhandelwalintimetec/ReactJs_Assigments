import { HeaderProps } from "./Interface/Interfaces";
import { HeaderDiv, SubHeaderDiv } from "./StyleComponents/HeaderStyle";

const Header = ({ screenChanger }: HeaderProps) => {
  return (
    <>
      <HeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger("counter");
          }}
        >
          Assigment 1
        </SubHeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger("customHook");
          }}
        >
          Assigment 2
        </SubHeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger("form");
          }}
        >
          Assigment 3
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
