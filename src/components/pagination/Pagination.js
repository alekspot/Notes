import {renderPagination} from "./template";
import {Component} from '../../core/Component';
import {$} from "../../core/dom";

export class Pagination extends Component {
    static className= 'pagination'

    constructor($root, options) {
        super($root, {
            name: 'Pagination',
            listeners: ['click'],
            subscribe: ['pagination'],
            ...options
        });
    }

    toHTML() {
        return renderPagination(this.store.getState());
    }

    onClick(event) {
        const $target = $(event.target);

        if ($target.data.page) {
            this.$dispatch({type: 'SELECT_PAGE', page: Number($target.data.page)});
        }
    }

    storeChanged(c) {
        this.$root.html(this.toHTML());
    }
}