import { combineReducers } from "redux";

import itemsReducer from "./reducers";


const rootReducer = combineReducers({
  itemsState : itemsReducer,
 
});

export default rootReducer;