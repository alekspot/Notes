import {DomListener} from './DomListener';

export class Component extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.store = options.store;
        this.subscribe = options.subscribe || [];

        this.prepare();
    }

    prepare() {}
    
    toHTML() {
        return '';
    }

    init() {
        this.initDomListeners();
    }

    destroy() {
        this.removeDomListeners();
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    storeChanged(changes) {
        console.log('changes', changes);
    }

    isWatching(key) {
        return this.subscribe.includes(key);
    }
}