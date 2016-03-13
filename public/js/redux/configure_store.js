var rootReducer = require('redux/reducers/root_reducer');
var redux = require('redux');
var thunkMiddleware = require('redux-thunk');

var configureStore = initialState => {
    return redux.createStore(
        rootReducer,
        initialState,
        redux.applyMiddleware(thunkMiddleware),
    );
};

module.exports = configureStore;
