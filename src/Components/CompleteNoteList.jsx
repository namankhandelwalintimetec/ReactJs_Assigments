import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./AppStyle.css";

const CompletedNoteList =(props)=> {
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
      <div className="card-modify">
        <p className="set-date">
          {date.getDate()}/{monthName[date.getMonth()]}/{date.getFullYear()}
        </p>
        <div className="border-line"></div>
        <p className="add-scroll-modify">{props.text}</p>
      
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}

export default CompletedNoteList;
