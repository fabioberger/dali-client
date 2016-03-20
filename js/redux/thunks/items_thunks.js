const itemsActionCreators = require('redux/actions/items_action_creators');
const requestor = require('redux/requestor');

const itemsThunks = {
    fetchItems: () => {
        return async dispatch => {
            dispatch(itemsActionCreators.requestItems());
            const response = await requestor.getRequestAsync('/items');
            if (response.error) {
                dispatch(itemsActionCreators.requestItemsFailed(response.error));
            } else {
                dispatch(itemsActionCreators.receiveItems(response.result));
            }
        };
    },
};

module.exports = itemsThunks;
