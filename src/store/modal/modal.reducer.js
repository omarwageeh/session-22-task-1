import ModalActionTypes from "./modal.types";

const initialState = {
  shown: false,
  movie: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        shown: true,
        movie: action.payload,
      };
    case ModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        shown: false,
        movie: {},
      };
    default:
      return state;
  }
};

export default modalReducer;
