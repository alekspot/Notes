import { renderAction } from "./template";
import { Component } from '../../core/Component';
import { $ } from "../../core/dom";
import { addRecord, hideModal, removeRecord, showModal } from "../../redux/actions";

export class Actions extends Component {
    static className = 'records-header'

    constructor($root, options) {
        super($root, {
            name: 'Modal',
            listeners: ['click'],
            subscribe: ['showModal', 'selectedRecord'],
            ...options
        });
    }

    toHTML() {
        return renderAction(this.store.getState());
    }

    onClick(event) {
        const $target = $(event.target);
        if ($target.data.type === 'action') {

            switch ($target.data.action) {
            case 'show_modal': 
                this.$dispatch(showModal());
                    
                return;
            case 'close': 
                this.$dispatch(hideModal());
                return;
            case 'add': {
                const titleValue = this.$root.find('[data-input="title"]').$el.value;
                const textValue = this.$root.find('[data-input="text"]').$el.value;

                const date = new Date();
                const record = {
                    id: date.getTime(),
                    month: date.getMonth(),
                    time: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                    title: titleValue,
                    text: textValue
                };

                this.$dispatch(addRecord(record));
                    
                //this.$dispatch(hideModal())
                return;
            }

            case 'delete': {
                this.$dispatch(removeRecord());
                return;
            }

            }
        } 
    }

    storeChanged() {
        this.$root.html(renderAction(this.store.getState()));
    }
}