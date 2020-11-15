import { SELECT_MONTH, SELECT_RECORD, SELECT_PAGE, SHOW_MODAL, HIDE_MODAL, ADD_RECORD, REMOVE_RECORD } from "./types";

export const selectMonth = (id) => ({type: SELECT_MONTH, month: Number.parseInt(id)});
export const selectRecord = (id) => ({type: SELECT_RECORD, id: Number.parseInt(id)});
export const selectPage = (number) => ({type: SELECT_PAGE, id: Number.parseInt(number)});
export const showModal = () => ({type: SHOW_MODAL});
export const hideModal = () => ({type: HIDE_MODAL});
export const addRecord = (record) => ({type: ADD_RECORD, record});
export const removeRecord = () => ({type: REMOVE_RECORD});
