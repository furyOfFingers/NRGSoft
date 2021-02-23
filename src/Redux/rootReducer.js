import { combineReducers } from "redux";
import list from "./links";
import isFetch from "./isFetch";

const rootReducer = combineReducers({
  list,
  isFetch,
});

export default rootReducer;
