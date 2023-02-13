import React, { useState } from "react";
import "./Apptesting.css";
import Todo from "./compo/Todo";
import Edit from "./edit.png";
import ModifyList from "./compo/Modifylist";

export default function App() {
  const [note, setNote] = useState("");
  const [noteArray, setNoteArray] = useState([]);
  const [updateArray, setUpdateArray] = useState([]);
  const [modify, setModify] = useState("false");
  const [index, setIndex] = useState();

  function modfiy(index) {
    setNote(noteArray[index]);
    setModify("true");
    setIndex(index);
  }

  const inputData = (event) => {
    setNote(event.target.value);
  };

  const show = () => {
    if (note === "" || note.trim()==="") {
      alert("content Add");
    } else if (modify !== "true") {
      setNoteArray((oldNote) => {
        return [...oldNote, note];
      });
    } else if (modify === "true") {
      setModify("false");
      setNoteArray((oldNote) => {
        return oldNote.map((item, id) => {
          return id === index ? note : item;
        });
      });
    }
    setNote("");
  };

  const deleteNote= (id) => {
    setNoteArray((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== id;
      });
    });
    setNote("");
  };

  const completeList = (id) => {
    setUpdateArray((oldNote) => {
      return [...oldNote,noteArray[id]];
    });
    setNoteArray((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== id;
      });
    });
    setNote("");
  };

  const deletCompleteTask = (id) => {
    setUpdateArray((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== id;
      });
    });
    setNote("");
  };

  return (
    <>
      <div className="main-card">
        <diV className="center">
          <h1 className="head-part"> Todo list </h1>
          <input
            placeholder="enter your text"
            value={note}
            onChange={inputData}
          />
          <button onClick={show}>
              <img className="ADD" src={Edit} />
          </button>
        </diV>
      </div>

      <div className="note-card">
        {noteArray.map((value, index) => {
          return (
            <Todo
              text={value}
              key={index}
              id={index}
              onSelect={deleteNote}
              modfiy={modfiy}
              completeList={completeList}
            />
          );
        })}
      </div>

      <h1
        className="update-list"
        style={{
          display: updateArray.length <= 0 ? "none" : "block",
          color: "white",
        }}
      >
        Completed list
      </h1>
      <div className=" note-card">
        {updateArray.map((value, index) => {
          return (
            <ModifyList
              text={value}
              key={index}
              id={index}
              onSelect={deletCompleteTask}
            />
          );
        })}
      </div>
    </>
  );
}
