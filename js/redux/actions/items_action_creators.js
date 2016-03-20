const itemsActionTypes = require('redux/actions/items_action_types');

// Actions follow the Flux Standard Action Spec (https://github.com/acdlite/flux-standard-action)
const itemsActionCreators = {
    requestItems: () => {
        return {
            type: itemsActionTypes.FETCH_ITEMS,
        };
    },
    receiveItems: items => {
        return {
            type: itemsActionTypes.FETCH_ITEMS_SUCCEEDED,
            payload: items,
        };
    },
    requestItemsFailed: err => {
        return {
            type: itemsActionTypes.FETCH_ITEMS_FAILED,
            error: true,
            payload: err,
        };
    },
};

module.exports = itemsActionCreators;
