import {renderTable} from "./template";
import {Component} from '../../core/Component';
import {$} from "../../core/dom";
import {selectRecord} from '../../redux/actions';

export class Table extends Component {
    static className = 'records'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['click'],
            subscribe: ['selectedRecord', 'recordsOnPage'],
            ...options
        });
    }

    toHTML() {
        return renderTable(this.store.getState());
    }

    onClick(event) {
        const $target = $(event.target);
        const recordSelector = '[data-type="record"]';
        
        if ($target.closest(recordSelector).$el) {

            const selected = $target.closest(recordSelector);
            
            this.$root
                .findAll(recordSelector)
                .forEach($item => $item.removeClass('table__record--selected'));

            const recordId = selected.data.id;
            this.$dispatch(selectRecord(recordId));

            document.onclick = (event) => {
                const $target = $(event.target);
                const isClickInside = !$target.closest(recordSelector).$el;
                
                if(isClickInside) {
                    this.$dispatch(selectRecord(null));
                    document.onclick = null;
                } 
            };

            selected.addClass('table__record--selected');
        }
   
    }

    storeChanged(c) {
        this.$root.html(this.toHTML());
    }
}