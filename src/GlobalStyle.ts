import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #8c94e9; */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

.center {
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
}

.submit-image{
  width:31px;
  height:30px;
}

.center:hover {
  scale: 1.1;
  box-shadow: 10px 5px 5px rgb(0, 0, 0);
}

button {
  margin: 3%;
  width: 45px;
  height: 25%;
  border-radius: 50px;
  font-size: larger;
  font-weight: bold;
}

button:hover {
  scale: 0.9;
  font-weight: bold;
}

.header {
  display: flex;
  flex-direction: row;
  margin: auto;
  font-weight: bold;
  border: 2px solid black;
}

.head-subpart {
  width: 33%;
  height: 30px;
  padding: 2%;
  text-align: center;
  background-color: rgb(199, 238, 238);
}

.head-subpart:hover {
  background-color: rgb(59, 98, 207);
  scale: 0.9;
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.footer {
  position: absolute;
  bottom: 0px;
  margin-left: 43%;
  margin-right: 35%;
  font-size: 1vw;
}

.status-button{
  width: fit-content;
  margin:0px;
  background-color:#eebdcf;
  border:hidden;
}

.online-color{
  color : green;
}
.offline-color{
  color : red;
}
`;

export default GlobalStyle;
