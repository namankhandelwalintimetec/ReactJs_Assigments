import styled from "styled-components";

const Carddiv = styled.div`
  height: 237px;
  width: 250px;
  background-color: #ffffff;
  border-radius: 20px;

  @media (max-width: 610px) {
    width: 220px;
    height: 220px;
    margin-left: 25px;
    margin-bottom: 20px;
  }
`;

const Border = styled.div`
  border: 1px solid rgb(51, 51, 51);
  width: 80%;
  margin: auto;
`;

const Notecontainer = styled.div`
  text-align: justify right;
  margin: 1%;
  display: grid;
  gap: 5%;
  grid-template-columns: repeat(auto-fill, 250px);
  background: #d8cccc;
  overflow-y: scroll;
  height: 250px;

  @media (max-width: 610px) {
    text-align: justify right;
    display: grid;
    /* height: auto; */
    list-style: none;
    background: #d8cccc;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 30px;
    width: 50%;
    height: 250px;
  }
`;

const Buttomborder = styled.div`
  border: 1px solid rgb(151, 149, 149);
  width: 80%;
  margin: auto;
  margin-bottom: 2px;

  @media (max-width: 610px) {
    width: 220px;
    height: 220px;
    margin-left: 25px;
    margin-bottom: 20px;
  }
`;

const Completedcard = styled.div`
  height: 237px;
  width: 250px;
  background-color: #c7b9b9;
  border-radius: 20px;
  color: rgb(0, 0, 0);
`;

const Centerdiv = styled.div`
  margin: auto;
  width: 40%;
  border: 3px solid #73ad21;
  padding: 10px;
  background-color: azure;
  text-align: center;
  align-items: center;
`;
export {
  Carddiv,
  Border,
  Notecontainer,
  Buttomborder,
  Completedcard,
  Centerdiv,
};
