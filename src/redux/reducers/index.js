import {
  OPEN_ADD_MODAL,
  CLOSE_ADD_MODAL,
  SUBMIT_ADD_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  SUBMIT_EDIT_MODAL,
  DELETE_RECORD,
} from "../actions";

export const addReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return;
    case CLOSE_ADD_MODAL:
      return;
    case SUBMIT_ADD_MODAL:
      return;
    default:
      return state;
  }
};

export const addModalReducer = (
    state = {isAddOn: false}, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return {
        isAddOn: true,
      };
    case CLOSE_ADD_MODAL:
      return {};
    case SUBMIT_ADD_MODAL:
      return {};
    default:
      return state;
  }
};


export const editModalReducer = (state = {}, action) => {
    switch (action.type) {
      case OPEN_EDIT_MODAL:
        return {};
      case CLOSE_EDIT_MODAL:
        return {};
      case SUBMIT_EDIT_MODAL:
        return {};
      default:
        return state;
    }
  };