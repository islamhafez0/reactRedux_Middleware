import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default reducers;
