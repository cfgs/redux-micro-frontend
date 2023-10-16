import { combineReducers } from "redux";
import userReducers from "./user/userReducers";

const rootReducer = combineReducers({
  user: userReducers
});

export default rootReducer;
