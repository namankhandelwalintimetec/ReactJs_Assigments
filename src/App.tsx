import { useState } from "react";
import EditImage from "./Image/EditImage.png";
import MonthName from "./Components/Monthname";
import { ButtonEdit, Button } from "./StyleComponents/Button";
import Clock from "react-live-clock";
import Footer from "./StyleComponents/Footer";
import { AllUpdateNote } from "./Interface/StateDateType";
import GlobalStyle from "./GlobalStyle";
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
  const [allNotes, setallNotes] = useState<AllUpdateNote[]>([
    { id: 0, title: "", update: false },
  ]);

  const [checkUpdate, setCheckUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);

  const unCompletedNoteList = allNotes.filter((value) => {
    return value.update === false;
  });

  const completedNoteList = allNotes.filter((value) => {
    return value.update === true;
  });

  const updateNote = (updateNoteIndex: number) => {
    setNote(allNotes[updateNoteIndex].title);
    setCheckUpdate(true);
    setUpdateIndex(updateNoteIndex);
    if (unCompletedNoteList.length <= 1) {
      setNote("");
    }
  };

  const inputNoteData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const dispalyNote = (note: string) => {
    if (note === "" || note.trim() === "") {
      alert("content Add");
    } else if (checkUpdate === true) {
      const updatedTodoListArray = [...allNotes];
      updatedTodoListArray[updateIndex].title = note;
      setallNotes(updatedTodoListArray);
      setNote("");
      setCheckUpdate(false);
    } else {
      setallNotes([
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
    setallNotes((oldNote) => {
      return oldNote.filter((element, index) => {
        return element.id !== id;
      });
    });
    setNote("");
  };

  const checkNoteCompleted = (id: number) => {
    const updatedTodoListArray = [...allNotes];
    updatedTodoListArray[id].update = true;
    setallNotes(updatedTodoListArray);
    setNote("");
    if (unCompletedNoteList.length <= 1) {
      setNote("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <CenterDiv>
          <div className="time">
            <Clock format={"HH:mm:ss"} ticking={true} />
          </div>
          <h1 className="head-part"> Todo list </h1>
          <input
            placeholder="enter your text"
            value={note}
            onChange={inputNoteData}
          />
          <ButtonEdit onClick={() => dispalyNote(note)}>
            <img className="ADD" src={EditImage} alt="Add" />
          </ButtonEdit>
        </CenterDiv>
      </div>

      <div className="popup-box">
        <h1
          className={
            completedNoteList.length <= 0
              ? "note-popup-conditional"
              : "note-popup"
          }
        >
          Note List
        </h1>
        <h1
          className={
            completedNoteList.length <= 0
              ? "complete-popup-conditional"
              : "completenote-popup"
          }
        >
          Completed list
        </h1>
      </div>
      <div className={completedNoteList.length > 0 ? "flex" : "normal"}>
        <NoteContainer
          className={
            completedNoteList.length <= 0 ? "full-width" : "half-width"
          }
        >
          {allNotes.map((value, index) => {
            if (value.update === false && value.title !== "") {
              return (
                <CardDiv>
                  <p className="set-date">
                    {date.getDate()}/{MonthName[date.getMonth()]}/
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
                    onChange={() => checkNoteCompleted(index)}
                  />
                </CardDiv>
              );
            }
          })}
        </NoteContainer>

        <NoteContainer
          style={{ width: completedNoteList.length <= 0 ? "1%" : "50%" }}
        >
          {completedNoteList.map((value, index) => {
            return (
              <CompletedCard>
                <p className="set-date">
                  {date.getDate()}/{MonthName[date.getMonth()]}/
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
        <div className="footer-div">
          complete Task:{completedNoteList.length}{" "}
        </div>
        <div className="footer-div">
          Pending Task: {unCompletedNoteList.length - 1}
        </div>
        <div className="footer-div">Total task : {allNotes.length - 1}</div>
      </Footer>
    </>
  );
};

export default App;
