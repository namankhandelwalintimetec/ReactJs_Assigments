import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../Apptesting.css";

export default function Todo(props) {
  let monthName = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date();
  return (
    <>
      <div className="card">
        <p className="set-date">
          {date.getDate()}/{monthName[date.getMonth()]}/{date.getFullYear()}
        </p>
        <div className="border-line"></div>

        <p className="addscroll">{props.text}</p>

        <div className="border-down"></div>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="Delete"
        >
          <DeleteIcon/>
        </button>

        <button
          className="update"
          onClick={() => {
            props.modfiy(props.id);
          }}
        >
          <EditIcon className="edit-change" />
        </button>

        <input
          className="check"
          type="checkbox"
          checked="un-checked"
          onChange={() => {
            props.completeList(props.id);
          }}
        />
      </div>
    </>
  );
}
