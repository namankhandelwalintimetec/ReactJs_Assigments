import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  box-shadow: rgba(50, 50, 93, 0.23) 0px 30px 30px -20px;

  .logo {
    font-size: 30px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    width: 75%;

    li {
      list-style-type: none;
      color: black;
      font-size: 20px;
      padding: 10px 20px;
      margin: 0 10px;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .mobile-menu-icon {
    display: none;
  }
  button {
    border: none;
    text-decoration: none;
    font-size: 20px;
    background: none;
  }

  @media (max-width: 768px) {
    .logo {
      display: flex;
      position: absolute;
      top: 15px;
      left: 35px;
    }
    .nav-links {
      display: none;
    }
    .nav-links-mobile {
      position: absolute;
      display: block;
      list-style: none;
      box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      left: 0;
      top: 10%;
      transition: all 0.5s ease-in-out;
      width: 100%;
      background-color: white;
    }
    ul li {
      padding: 32px;
      width: 100%;
      transition: all 0.5s ease-in-out;
      text-align: center;
    }
    .mobile-menu-icon {
      position: absolute;
      display: block;
      right: 20px;
    }
  }
`;
