import HeaderActionTypes from "../header/header.types";
export const putHighest = (movie) => ({
  type: HeaderActionTypes.PUT_HIGHEST,
  payload: movie,
});
export const clearHighest = ()=>({type: HeaderActionTypes.CLEAR_HIGHEST})
