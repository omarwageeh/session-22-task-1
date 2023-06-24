import MoviesActionTypes from "./movies.types";

const initialState = {
  status: "idle",
  data: [],
  errorMessage: null,
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        status: "fetching",
      };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        status: "success",
        data: action.payload,
      };
    case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        status: "falied",
        errorMessage: action.payload,
      };
    case MoviesActionTypes.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case MoviesActionTypes.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export default moviesReducer;
