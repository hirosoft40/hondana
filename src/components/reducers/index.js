import { combineReducers } from "redux";
import bookLogReducer from "./bookLogReducer";
import dailyLogReducer from "./dailyLogReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  bookLog: bookLogReducer,
  dailyLog: dailyLogReducer,
  firestore:firestoreReducer
});

export default rootReducer;
