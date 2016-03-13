var R = require('ramda');
var assert = require('assert');
var utils = require('utils');
var reducer = require('redux/reducers/root_reducer');
var itemsActionTypes = require('redux/actions/items_action_types');
var initialState = require('redux/initial_states/initial_state');

describe('Store reducer', () => {
    it('should return the initial state', done => {
        var expectedState = initialState;
        assert(R.equals(reducer(undefined, {}), expectedState));
        done();
    });
});

describe('Items Reducer', () => {
    it('should return the same state if an error was thrown (FETCH_ITEMS_FAILED)', done => {
        var expectedState = initialState;
        assert(R.equals(reducer(expectedState, {
            type: itemsActionTypes.FETCH_ITEMS_FAILED,
            error: true,
        }), expectedState));
        done();
    });

    it('should return the same state if an error was thrown (FETCH_ITEMS_SUCCEEDED)', done => {
        var currentState = utils.cloneDeep(initialState);
        currentState.items.isFetching = true;
        var expectedState = initialState;
        assert(R.equals(reducer(expectedState, {
            type: itemsActionTypes.FETCH_ITEMS_SUCCEEDED,
            payload: [],
        }), expectedState));
        done();
    });

    it('should return isFetching as true when (FETCH_ITEMS)', done => {
        var expectedState = initialState;
        expectedState.items.isFetching = true;
        assert(R.equals(reducer(initialState, {
            type: itemsActionTypes.FETCH_ITEMS,
        }), expectedState));
        done();
    });
});
