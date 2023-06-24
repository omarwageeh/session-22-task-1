import HeaderActionTypes from "./header.types";

const initialState = {
  topRated: {},
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case HeaderActionTypes.PUT_HIGHEST:
      return {
        ...state,
        topRated: action.payload,
      };
    case HeaderActionTypes.CLEAR_HIGHEST:
      return {
        ...state,
        topRated: {},
      };
    default:
      return state;
  }
};
export default headerReducer;
