import React, { useState } from "react";
import Edit from "./Image/edit.png";
import monthName from "./Components/Monthname";
import { ButtonEdit, Button } from "./StyleComponents/Button";
import Clock from "react-live-clock";
import Footer from "./StyleComponents/Footer";
import { allUpdateNote } from "./Type/Type";
import GlobalStyle from "./globalStyle";
import {
  Border,
  ButtomBorder,
  CardDiv,
  CenterDiv,
  CompletedCard,
  NoteContainer,
} from "./StyleComponents/NoteDiv";

const App = () => {
  const date = new Date();
  const [note, setNote] = useState<string>("");
  const [allNotes, setAllNotes] = useState<allUpdateNote[]>([
    { id: 0, title: "", update: false },
  ]);

  const [checkUpdate, setCheckUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);

  const NoteList = allNotes.filter((value) => {
    return value.update === false;
  });

  const completeList = allNotes.filter((value) => {
    return value.update === true;
  });

  const updateNote = (updateNoteIndex: number) => {
    setNote(allNotes[updateNoteIndex].title);
    setCheckUpdate(true);
    setUpdateIndex(updateNoteIndex);
  };

  const inputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const dispalyNote = (note: string) => {
    if (note === "" || note.trim() === "") {
      alert("content Add");
    } else if (checkUpdate == true) {
      const updatedTodoListArray = [...allNotes];
      updatedTodoListArray[updateIndex].title = note;
      setAllNotes(updatedTodoListArray);
      setNote("");
      setCheckUpdate(false);
    } else {
      setAllNotes([
        ...allNotes,
        {
          id: allNotes.length,
          title: note.trim(),
          update: false,
        },
      ]);
    }
    setNote("");
  };

  const deleteNote = (id: number) => {
    setAllNotes((oldNote) => {
      return oldNote.filter((element, index) => {
        return element.id !== id;
      });
    });
    setNote("");
  };

  const checkComplete = (id: number) => {
    const updatedTodoListArray = [...allNotes];
    updatedTodoListArray[id].update = true;
    setAllNotes(updatedTodoListArray);
    setNote("");
    if (NoteList.length <= 1) {
      setNote("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <CenterDiv>
          <div className="time">
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </div>
          <h1 className="head-part"> Todo list </h1>
          <input
            placeholder="enter your text"
            value={note}
            onChange={inputData}
          />
          <ButtonEdit onClick={() => dispalyNote(note)}>
            <img className="ADD" src={Edit} />
          </ButtonEdit>
        </CenterDiv>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <h1
          className="update-list"
          style={{
            marginTop: "2%",
            width: "30%",
            display: completeList.length <= 0 ? "none" : "block",
            margin: completeList.length <= 0 ? "auto" : "2%",
          }}
        >
          Note List
        </h1>
        <h1
          className="update-list"
          style={{
            display: completeList.length <= 0 ? "none" : "block",
            width: completeList.length <= 0 ? "none" : "30%",
            margin: "2%",
            marginLeft: "7%",
            left: "45%",
            position: "absolute",
          }}
        >
          Completed list
        </h1>
      </div>
      <div style={{ display: completeList.length > 0 ? "flex" : "normal" }}>
        <NoteContainer
          style={{ width: completeList.length <= 0 ? "100%" : "50%" }}
        >
          {allNotes.map((value, index) => {
            if (value.update == false && value.title !== "") {
              return (
                <CardDiv>
                  <p className="set-date">
                    {date.getDate()}/{monthName[date.getMonth()]}/
                    {date.getFullYear()}
                  </p>
                  <Border></Border>

                  <p className="addscroll">{value.title}</p>

                  <ButtomBorder></ButtomBorder>
                  <Button onClick={() => deleteNote(value.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </Button>

                  <ButtonEdit onClick={() => updateNote(index)}>
                    <span className="material-symbols-outlined edit-change">
                      edit
                    </span>
                  </ButtonEdit>

                  <input
                    className="check"
                    type="checkbox"
                    onChange={() => checkComplete(index)}
                  />
                </CardDiv>
              );
            }
          })}
        </NoteContainer>

        <NoteContainer
          style={{ width: completeList.length <= 0 ? "1%" : "50%" }}
        >
          {completeList.map((value, index) => {
            return (
              <CompletedCard>
                <p className="set-date">
                  {date.getDate()}/{monthName[date.getMonth()]}/
                  {date.getFullYear()}
                </p>
                <Border></Border>

                <p className="addscroll-modify">{value.title}</p>

                <ButtomBorder className="border-down"></ButtomBorder>
                <Button
                  onClick={() => {
                    deleteNote(value.id);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </CompletedCard>
            );
          })}
        </NoteContainer>
      </div>

      <Footer>
        <div className="footer-div">complete Task:{completeList.length} </div>
        <div className="footer-div">Pending Task: {NoteList.length - 1}</div>
        <div className="footer-div">Total task : {allNotes.length - 1}</div>
      </Footer>
    </>
  );
};

export default App;
