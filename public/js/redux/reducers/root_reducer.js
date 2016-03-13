var Redux = require('redux');
var itemsReducer = require('redux/reducers/items_reducer');

module.exports = Redux.combineReducers({
    'items': itemsReducer,
});
