import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { articleReducer } from "./article";

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

export default rootReducer;
