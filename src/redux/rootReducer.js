import {setPageRecordsWithPaginationByMonth, setPageRecords, storage} from "../core/utils";
import { SELECT_MONTH, SELECT_RECORD, SELECT_PAGE, ADD_RECORD, SHOW_MODAL, HIDE_MODAL, REMOVE_RECORD } from "./types";

const month = new Date().getMonth();
const records = [];

const initialState = {
    month,
    records: [], 
    ...setPageRecordsWithPaginationByMonth(records, month, 1),
    selectedRecord: null,
    showModal: false
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
    case SELECT_MONTH:
        return {
            ...state,
            month: action.month,
            selectedRecord: null,
            ...setPageRecordsWithPaginationByMonth(state.records, action.month, 1)
        };

    case SELECT_RECORD:
        return {
            ...state,
            selectedRecord: action.id
        };

    case SELECT_PAGE: {

        return {
            ...state,
            selectedRecord: null,
            ...setPageRecords(state.recordsByMonth, action.page)
        };
    }

    case ADD_RECORD: {
        const newRecords = [...state.records, action.record];
        const {currentPage} = state.pagination;

        storage('appRecords', newRecords);

        return {
            ...state,
            records: newRecords,
            ...setPageRecordsWithPaginationByMonth(newRecords, state.month, currentPage)
        };

    }

    case REMOVE_RECORD: {
        const newRecords = state.records.filter(rec => rec.id !== state.selectedRecord);
        const {currentPage} = state.pagination;
        storage('appRecords', newRecords);

        return {
            ...state,
            records: newRecords,
            ...setPageRecordsWithPaginationByMonth(newRecords, state.month, currentPage)
        };
    }

    case SHOW_MODAL:  
        return {
            ...state,
            showModal: true
        };

    case HIDE_MODAL: 
        return {
            ...state,
            showModal: false
        };

    default: return state;
    }
}
