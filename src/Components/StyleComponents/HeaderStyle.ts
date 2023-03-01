import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  font-weight: bold;
  border: 2px solid black;
`;

export const SubHeaderDiv = styled.div`
  width: 33%;
  height: 30px;
  padding: 2%;
  text-align: center;
  background-color: rgb(199, 238, 238);
  :hover {
    background-color: rgb(59, 98, 207);
    scale: 0.9;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;