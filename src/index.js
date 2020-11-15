import './styles/index.scss';
import { App } from './core/App';
import { Navigation } from './components/navigation/Navigation';
import { createStore } from './core/Store/createStore';
import { rootReducer } from './redux/rootReducer';
import { Table } from './components/table/Table';
import { Pagination } from './components/pagination/Pagination';
import { storage, setPageRecordsWithPaginationByMonth } from './core/utils';
import { Actions } from './components/actions/Actions';

const records = storage('appRecords') || [];
const month = new Date().getMonth();

const initialState = {
    month,
    records, 
    ...setPageRecordsWithPaginationByMonth(records, month, 1 ),
    selectedRecord: null,
    showModal: false
};

const store = createStore(rootReducer, initialState);

const app = new App({
    components: [
        Navigation,
        Actions,
        Table,
        Pagination,
        
    ],
    store

}, '#root');

app.render();