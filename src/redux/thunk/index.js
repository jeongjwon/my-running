import axios from "axios";
import {
    openAddModalAction,
    closeADDModalAction,
    submitAddModalAction,
    openEditModalAction,
    closeEditModalAction,
    editEditModalAction,
    deleteRecord,
    setRecords,
    addRecords
  } from "../actions";



  export const getRecordsThunk = (payload) => (dispatch) => {
    let records = window.localStorage.getItem('records');

    if(records){
        records = JSON.parse(records);
        dispatch(setRecords);
    }else{
        window.localStorage.setItem('records', []);
    }
  };

  // export const addRecordsThunk = (payload) => {
  //   const records = getState()['recordsReducer'];
  //   const updatedReocrds = {
  //       [payload.id]: payload,
  //       ...records,
  //   };

  //   window.localStorage.setItem('records', JSON.stringify(updatedReocrds));
  //   dispatch(addRecords(payload));
  // }