import PubSub from '../lib/PubSub';

export default class Store {
    constructor(params) {
        this.actions = {};
        this.mutations = {};
        this.state = {};

        this.status = 'resting';

        this.events = new PubSub();

        if (params.hasOwnProperty('mutations')) {
            this.mutations = params.mutations;
        }
        if (params.hasOwnProperty('actions')) {
            this.actions = params.actions;
        }

        this.state = new Proxy((params.state || {}), {
            set: (set, key, value) => {
                state[key] = value;
                console.log(`stateChange: ${key}: ${value}`);

                this.events.publish('stateChange', this.state);

                if (this.status !== 'mutations') {
                    console.warn(`You should use a mutation to set ${key}`)
                }

                this.status = 'resting';
                return true
            }
        })
    }

    dispatch (actionKey, payload){

    }

    commit (mutationKey, payload){

    }
}