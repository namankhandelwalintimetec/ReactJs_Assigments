import styled from "styled-components";

const CounterButton = styled.button`
  margin: 3%;
  width: 45px;
  height: 25%;
  border-radius: 50px;
  font-size: larger;
  font-weight: bold;
  :hover {
    scale: 0.9;
    font-weight: bold;
  }
`;

const Div = styled.div`
  margin: auto;
  align-items: center;
  text-align: center;
  margin-top: 10%;
  font-weight: bold;
  transition: scale 2s;
  border: 1px solid black;
  width: 250px;
  padding: 2%;
  background-color: #eebdcf;
  border-radius: 10px;
  height: 20vh;
  :hover {
    scale: 1.1;
  }
`;

const CounterButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 95%;
  margin-left: 19%;
`;

export { CounterButton, Div, CounterButtonDiv };
