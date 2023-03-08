import styled from "styled-components";

export const Form = styled.form`
  margin: auto;
  font-family: -apple-system, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  padding: 30px;
  padding-bottom: 10px;

  border-radius: 0.25rem;
  width: 60%;
  margin-top: 4%;

  .submit-button {
    border-radius: 5px;
  }

  .contact-head {
    font-weight: 800;
    font-size: 2em;
    text-align: center;
  }
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;
