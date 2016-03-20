const Redux = require('redux');
const itemsReducer = require('redux/reducers/items_reducer');

module.exports = Redux.combineReducers({
    'items': itemsReducer,
});
