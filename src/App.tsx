import Editimage from "./Image/Editimage.png";
import Monthname from "./Components/Monthname";
import { Editbutton, Button } from "./StyleComponents/Button";
import Clock from "react-live-clock";
import Footer from "./StyleComponents/Footer";
import { Allnotetype } from "./Interface/InterfaceType";
import Globalstyle from "./globalStyle";
import {
  Border,
  Buttomborder,
  Carddiv,
  Centerdiv,
  Completedcard,
  Notecontainer,
} from "./StyleComponents/NoteDiv";

const App = () => {
  const date = new Date();
  const [note, setNote] = useState<string>("");
  const [allNotes, setAllNotes] = useState<Allnotetype[]>([
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
        <Centerdiv>
          <div className="time">
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </div>
          <h1 className="head-part"> Todo list </h1>
          <input
            placeholder="enter your text"
            value={note}
            onChange={inputNoteData}
          />
          <Editbutton onClick={() => dispalyNote(note)}>
            <img className="ADD" src={EditImage} />
          </Editbutton>
        </Centerdiv>
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
        <Notecontainer
          style={{ width: completedNoteList.length <= 0 ? "100%" : "50%" }}
        >
          {allNotes.map((value, index) => {
            if (value.update == false && value.title !== "") {
              return (
                <Carddiv>
                  <p className="set-date">
                    {date.getDate()}/{monthName[date.getMonth()]}/
                    {date.getFullYear()}
                  </p>
                  <Border></Border>

                  <p className="addscroll">{value.title}</p>

                  <Buttomborder></Buttomborder>
                  <Button onClick={() => deleteNote(value.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </Button>

                  <Editbutton onClick={() => updateNote(index)}>
                    <span className="material-symbols-outlined edit-change">
                      edit
                    </span>
                  </Editbutton>

                  <input
                    className="check"
                    type="checkbox"
                    onChange={() => checkNoteCompleted(index)}
                  />
                </Carddiv>
              );
            }
          })}
        </Notecontainer>

        <Notecontainer
          style={{ width: completedNoteList.length <= 0 ? "1%" : "50%" }}
        >
          {completedNoteList.map((value, index) => {
            return (
              <Completedcard>
                <p className="set-date">
                  {date.getDate()}/{Monthname[date.getMonth()]}/
                  {date.getFullYear()}
                </p>
                <Border></Border>

                <p className="addscroll-modify">{value.title}</p>

                <buttomBorder className="border-down"></buttomBorder>
                <Button
                  onClick={() => {
                    deleteNote(value.id);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </Completedcard>
            );
          })}
        </Notecontainer>
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
