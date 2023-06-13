export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL';

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';


export const DELETE_RECORD = 'DELETE_RECORD';
export const SET_RECORDS = 'SET_RECORDS';
export const ADD_RECORDS = 'ADD_RECORDS';

//추가 폼
export const openAddModalAction = (payload) => {
    return { type: OPEN_ADD_MODAL, payload}
};
export const closeAddModalAction = () => {
    return { type: CLOSE_ADD_MODAL }
}

//편집 폼
export const openEditModalAction = (payload) => {
    return { type: OPEN_EDIT_MODAL, payload}
};
export const closeEditModalAction = () => {
    return { type: CLOSE_EDIT_MODAL }
}


//삭제
export const deleteRecord = (payload) => {
    return{
        type: DELETE_RECORD,
        payload: payload,
    }
}

export const setRecords = (payload) =>{
    return {
        type: SET_RECORDS,
        payload: payload,
    }
}

export const addRecords = (payload) => {
    return{
        type: ADD_RECORDS,
        payload: payload,
    }
}