const R = require('ramda');
const assert = require('assert');
const utils = require('utils');
const reducer = require('redux/reducers/root_reducer');
const itemsActionTypes = require('redux/actions/items_action_types');
const initialState = require('redux/initial_states/initial_state');

describe('Store reducer', () => {
    it('should return the initial state', done => {
        const expectedState = initialState;
        assert(R.equals(reducer(undefined, {}), expectedState));
        done();
    });
});

describe('Items Reducer', () => {
    it('should return the same state if an error was thrown (FETCH_ITEMS_FAILED)', done => {
        const expectedState = initialState;
        assert(R.equals(reducer(expectedState, {
            type: itemsActionTypes.FETCH_ITEMS_FAILED,
            error: true,
        }), expectedState));
        done();
    });

    it('should return the same state if an error was thrown (FETCH_ITEMS_SUCCEEDED)', done => {
        let currentState = utils.cloneDeep(initialState);
        currentState.items.isFetching = true;
        const expectedState = initialState;
        assert(R.equals(reducer(expectedState, {
            type: itemsActionTypes.FETCH_ITEMS_SUCCEEDED,
            payload: [],
        }), expectedState));
        done();
    });

    it('should return isFetching as true when (FETCH_ITEMS)', done => {
        let expectedState = initialState;
        expectedState.items.isFetching = true;
        assert(R.equals(reducer(initialState, {
            type: itemsActionTypes.FETCH_ITEMS,
        }), expectedState));
        done();
    });
});
