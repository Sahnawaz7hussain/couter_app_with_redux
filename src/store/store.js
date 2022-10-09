import { combineReducers, legacy_createStore } from "redux";

import { counterReducer } from "./reducer";

let rootReducer = combineReducers({
  calculatorReducer: counterReducer,
});
export const store = legacy_createStore(rootReducer);
