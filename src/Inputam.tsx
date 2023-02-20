import React from "react";
import { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { InputFiles } from "typescript";


function Inputam() {
  const [first, setfirst] = useState<string>("");
  function inputData(event: React.ChangeEvent<HTMLInputElement>) {
    setfirst(event.target.value);
	console.log(first);
  }
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
  `;
  const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
  `;
  const _Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;

 

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  

  return (
    <>
      {/* <div className="note-card">
        {allNotes.map((value, index) => {
          return (
            <div className="card">
              <p className="set-date">
                {date.getDate()}/{monthName[date.getMonth()]}/
                {date.getFullYear()}
              </p>
              <div className="border-line"></div>

              <p className="addscroll">{value}</p>

              <div className="border-down"></div>
              <button onClick={() => deleteNote(index)} className="Delete">
                <span className="material-symbols-outlined">delete</span>
              </button>

              <button className="update" onClick={() => modfiy(index)}>
                <span className="material-symbols-outlined edit-change">
                  edit
                </span>
              </button>

              <input
                className="check"
                type="checkbox"
                // checked ="un-checked"
                onChange={() => completeList(index)}
              />
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Inputam;
