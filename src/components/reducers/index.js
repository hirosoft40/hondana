import { combineReducers } from "redux";
import bookLogReducer from "./bookLogReducer";
import dailyLogReducer from "./dailyLogReducer";

const rootReducer = combineReducers({
  bookLog: bookLogReducer,
  dailyLog: dailyLogReducer
});

export default rootReducer;