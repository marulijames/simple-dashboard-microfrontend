import { createStore } from 'redux';

const initialState = {
    name: 'Honey-badger'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { name: action.name }
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);