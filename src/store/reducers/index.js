import { combineReducers } from "redux";
import auth from "./auth.reducer";

const createReducer = asyncReducers =>
  combineReducers({
    auth,

  });

export default createReducer;
