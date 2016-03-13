var itemsInitialState = require('redux/initial_states/items_initial_state');
var itemsActionTypes = require('redux/actions/items_action_types');

var itemsReducer = (state = itemsInitialState, action) => {
    switch (action.type) {
        case itemsActionTypes.FETCH_ITEMS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case itemsActionTypes.FETCH_ITEMS_SUCCEEDED:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload,
            });
        case itemsActionTypes.FETCH_ITEMS_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
};

module.exports = itemsReducer;
