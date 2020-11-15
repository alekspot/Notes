import {$} from './dom';
import {StoreSubscriber} from './Store/StoreSubscriber';

export class App {
    constructor(options, selector) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.store = options.store;
        this.subscriber = new StoreSubscriber(this.store);
    }

    getRoot() {
        const $root =  $.create('div', 'app');

        const componentOptions = {
            store: this.store
        };

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el, componentOptions);

            $el.html(component.toHTML());
            $root.append($el);
            return component;
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        this.subscriber.subscribeComponents(this.components);
        this.components.forEach(component => component.init());
    }

    destroy() {
        this.subscriber.unSubscribeFromStore();
        this.components.forEach(component => component.destroy());
    }
}