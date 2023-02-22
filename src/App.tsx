import EditImage from "./Image/Editimage.png";
import MonthName from "./Components/Monthname";
import { EditButton, Button } from "./StyleComponents/Button";
import Clock from "react-live-clock";
import Footer from "./StyleComponents/Footer";
import { AllNoteType } from "./Interface/InterfaceType";
import Globalstyle from "./GlobalStyle";
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
  const [allNotes, setAllNotes] = useState<AllNoteType[]>([
    { id: 0, title: "", update: false },
  ]);

  const [checkUpdate, setCheckUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);

  const uncompletedNoteList = allNotes.filter((value) => {
    return value.update === false;
  });

  const completedNoteList = allNotes.filter((value) => {
    return value.update === true;
  });

  const updateNote = (updateNoteIndex: number) => {
    setNote(allNotes[updateNoteIndex].title);
    setCheckUpdate(true);
    setUpdateIndex(updateNoteIndex);
  };

  const inputNoteData = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const checkNoteCompleted = (id: number) => {
    const updatedTodoListArray = [...allNotes];
    updatedTodoListArray[id].update = true;
    setAllNotes(updatedTodoListArray);
    setNote("");
    if (uncompletedNoteList.length <= 1) {
      setNote("");
    }
  };

  return (
    <>
      <Globalstyle />
      <div>
        <CenterDiv>
          <div className="time">
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </div>
          <h1 className="head-part"> Todo list </h1>
          <input
            placeholder="enter your text"
            value={note}
            onChange={inputNoteData}
          />
          <EditButton onClick={() => dispalyNote(note)}>
            <img className="ADD" src={EditImage} />
          </EditButton>
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
            display: completedNoteList.length <= 0 ? "none" : "block",
            margin: completedNoteList.length <= 0 ? "auto" : "2%",
          }}
        >
          Note List
        </h1>
        <h1
          className="update-list"
          style={{
            display: completedNoteList.length <= 0 ? "none" : "block",
            width: completedNoteList.length <= 0 ? "none" : "30%",
            margin: "2%",
            marginLeft: "7%",
            left: "45%",
            position: "absolute",
          }}
        >
          Completed list
        </h1>
      </div>
      <div
        style={{ display: completedNoteList.length > 0 ? "flex" : "normal" }}
      >
        <NoteContainer
          style={{ width: completedNoteList.length <= 0 ? "100%" : "50%" }}
        >
          {allNotes.map((value, index) => {
            if (value.update == false && value.title !== "") {
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

                  <EditButton onClick={() => updateNote(index)}>
                    <span className="material-symbols-outlined edit-change">
                      edit
                    </span>
                  </EditButton>

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
                  {date.getDate()}/{Monthname[date.getMonth()]}/
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
          Pending Task: {uncompletedNoteList.length - 1}
        </div>
        <div className="footer-div">Total task : {allNotes.length - 1}</div>
      </Footer>
    </>
  );
};

export default App;
