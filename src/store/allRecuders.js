import { combineReducers } from "redux";
import movies from "./movies/movies.reducer";
import modal from "./modal/modal.reducer";
import header from "./header/header.reducer";

const rootReducer = combineReducers({
  movies,
  modal,
  header,
});

export default rootReducer;
