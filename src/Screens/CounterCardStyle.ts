import styled from "styled-components";

export const Card = styled.div`
  margin: auto;
  height: 350px;
  width: 40%;
  margin-top: 10%;
  background-color: rgb(124, 138, 78);
  border-radius: 4vw;

  :hover {
    scale: 1.1;
    box-shadow: 5px 5px 5px 5px #c5bebe;
  }

  h1 {
    font-weight: 700;
    font-size: 2vmax;
    text-align: center;
    align-items: center;
    border-bottom: 2px black solid;
    width: 60%;
    margin: auto;
    padding: 4%;
  }

  input {
    border: none;
    margin-left: 19%;
    margin-top: 5%;
    text-align: center;
    width: 20%;
    height: 2vw;
    font-size: 1.5vw;
    border-radius: 100px;
  }

  button {
    width: 11%;
    height: 4vw;
    margin: 2%;
    margin-left: 15%;
    font-weight: 900;
    font-size: 1vw;
    border-radius: 6vw;
  }

  p {
    font-size: 2vw;
    font-weight: 700;
    margin-left: 50%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;
