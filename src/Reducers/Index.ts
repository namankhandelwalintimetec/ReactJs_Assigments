import changeState from "./UpDown";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ changeState });

export default rootReducer;
