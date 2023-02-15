import React, { useState } from "react";
import "./AppStyle.css";
import Todo from "./Components/Todo";
import Edit from "./edit.png";
import CompletedNoteList from "./Components/CompleteNoteList";

const App = () => {
  const [note, setNote] = useState("");
  const [allNotes, setallNotes] = useState([]);
  const [allCompletedNotes, setallCompletedNotes] = useState([]);
  const [checkUpdate, setCheckUpdate] = useState("false");
  const [updateNodeIndex, setUpdateNodeIndex] = useState();

  const edit = (editNodeIndex) => {
    setNote(allNotes[editNodeIndex]);
    setCheckUpdate("true");
    setUpdateNodeIndex(editNodeIndex);
  };

  const inputData = (event) => {
    setNote(event.target.value);
  };

  const dispalyNote = () => {
    if (note === "" || note.trim() === "") {
      alert("content Add");
    } else if (checkUpdate !== "true") {
      setallNotes((oldNote) => {
        return [...oldNote, note];
      });
    } else if (checkUpdate === "true") {
      setCheckUpdate("false");
      setallNotes((oldNote) => {
        return oldNote.map((item, itemIndex) => {
          return itemIndex === updateNodeIndex ? note : item;
        });
      });
    }
    setNote("");
  };

  const deleteNote = (nodeIndex) => {
    setallNotes((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== nodeIndex;
      });
    });
    setNote("");
  };

  const completeList = (nodeIndex) => {
    setallCompletedNotes((oldNote) => {
      return [...oldNote, allNotes[nodeIndex]];
    });
    setallNotes((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== nodeIndex;
      });
    });
    setNote("");
  };

  const deletCompleteTask = (nodeIndex) => {
    setallCompletedNotes((oldNote) => {
      return oldNote.filter((element, index) => {
        return index !== nodeIndex;
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
          <button onClick={dispalyNote}>
            <img className="add-note" src={Edit} />
          </button>
        </diV>
      </div>

      <div className="note-card">
        {allNotes.map((value, index) => {
          return (
            <Todo
              text={value}
              key={index}
              id={index}
              onSelect={deleteNote}
              edit={edit}
              completeList={completeList}
            />
          );
        })}
      </div>

      <h1
        className="update-list"
        style={{
          display: allCompletedNotes.length <= 0 ? "none" : "block",
          color: "white",
        }}
      >
        Completed list
      </h1>
      <div className=" note-card">
        {allCompletedNotes.map((value, index) => {
          return (
            <CompletedNoteList
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
};

export default App;
