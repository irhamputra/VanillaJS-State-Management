import Component from '../lib/components';
import store from '../store/index';

export default class Count extends Component{
    constructor(){
        super({
            store,
            element: document.querySelector('.js-count')
        });
    }

    render(){
        let suffix = store.state.items.length !== 1 ? 's' : '';

        this.element.innerHTML = `
            <small>You've done</small>
            ${store.state.items.length}
            <small>thing${suffix} today.</small>
        `
    }
}