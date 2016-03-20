const utils = require('utils');

const itemsActionTypes = utils.keywords([
    'FETCH_ITEMS',
    'FETCH_ITEMS_SUCCEEDED',
    'FETCH_ITEMS_FAILED',
]);

module.exports = itemsActionTypes;
