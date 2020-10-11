import {combineReducers} from "redux";

import todos from "./todos";


const appReducer = combineReducers({
  todos,
})


const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
