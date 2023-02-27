import { HeaderProps } from "../Interface/Interfaces";
import { HeaderDiv, SubHeaderDiv } from "../StyleComponents/HeaderStyle";

const Header = ({ screenChanger }: HeaderProps) => {
  return (
    <>
      <HeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger(1);
          }}
        >
          Assigment 1
        </SubHeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger(2);
          }}
        >
          Assigment 2
        </SubHeaderDiv>
        <SubHeaderDiv
          onClick={() => {
            screenChanger(3);
          }}
        >
          Assigment 3
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
