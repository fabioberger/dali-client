const rootReducer = require('redux/reducers/root_reducer');
const redux = require('redux');
const thunkMiddleware = require('redux-thunk');

const configureStore = initialState => {
    return redux.createStore(
        rootReducer,
        initialState,
        redux.applyMiddleware(thunkMiddleware),
    );
};

module.exports = configureStore;
