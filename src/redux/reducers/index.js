import {
  OPEN_ADD_MODAL,
  CLOSE_ADD_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  DELETE_RECORD,
} from "../actions";

export const addReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return;
    case CLOSE_ADD_MODAL:
      return;
    default:
      return state;
  }
};

export const addModalReducer = (state = { isAddOn: false }, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return {
        isAddOn: true,
      };
    case CLOSE_ADD_MODAL:
      return {
        isAddOn: false,
      };
    default:
      return state;
  }
};

export const editModalReducer = (state = {isEditOn:false, record:{}}, action) =>{
  switch (action.type) {
    case OPEN_EDIT_MODAL:
      return {
        isEditOn: true,
        record: action.payload.record,
      };
    case CLOSE_EDIT_MODAL:
      return {
        isEditOn: false,
        record:{},
      };

    default:
      return state;
  }
};
