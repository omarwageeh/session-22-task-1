import MoviesActionTypes from "./movies.types";

export const moviesFetchStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_START,
});
export const moviesFetchSuccess = (movies) => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});
export const moviesFetchFailed = (e) => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  errorMessage: e,
});
export const nextPage = () => ({
  type: MoviesActionTypes.NEXT_PAGE,
});
export const prevPage = () => ({
  type: MoviesActionTypes.PREV_PAGE,
});
export const fetchMovies = async (dispatch, getState) => {
  dispatch(moviesFetchStart());
  const page = getState()?.movies.page;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f76591075c97e67b7c90de9185ffb80a&page=${page}`
    );
    const data = await response.json();
    dispatch(moviesFetchSuccess(data.results));
  } catch (e) {
    dispatch(moviesFetchFailed(e));
  }
};
