import { renderNav } from "./template";
import { Component } from '../../core/Component';
import { $ } from "../../core/dom";
import { selectMonth } from '../../redux/actions';

export class Navigation extends Component {
    static className = 'nav'

    constructor($root, options) {
        super($root, {
            name: 'Navigation',
            listeners: ['click'],
            ...options
        });
    }

    toHTML() {
        return renderNav(this.store.getState().month);
    }

    onClick(event) {
        const $target = $(event.target);
        const recordSelector = '[data-type="btn"]';

        if ($target.data.type === 'btn') {
            this.$root
                .findAll(recordSelector)
                .forEach($item => $item.removeClass('nav-item--selected'));

            this.$dispatch(selectMonth($target.data.id));

            $target.addClass('nav-item--selected');
        }
    }
}