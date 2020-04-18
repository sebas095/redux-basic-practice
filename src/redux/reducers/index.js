import { combineReducers } from "redux";
import managerReducer from "./manager";

export default combineReducers({
  manager: managerReducer,
});
