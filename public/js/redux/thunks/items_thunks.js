var itemsActionCreators = require('redux/actions/items_action_creators');
var requestor = require('redux/requestor');

var itemsThunks = {
    fetchItems: workspaceId => {
        return async dispatch => {
            dispatch(itemsActionCreators.requestItems());
            var response = await requestor.getRequestAsync(`/items`);
            if (response.error) {
                dispatch(itemsActionCreators.requestItemsFailed(response.error));
            } else {
                dispatch(itemsActionCreators.receiveItems(response.result));
            }
        };
    },
};

module.exports = itemsThunks;
