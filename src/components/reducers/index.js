import { combineReducers } from "redux";
import bookLogReducer from "./bookLogReducer";
import dailyLogReducer from "./dailyLogReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  bookLog: bookLogReducer,
  dailyLog: dailyLogReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
