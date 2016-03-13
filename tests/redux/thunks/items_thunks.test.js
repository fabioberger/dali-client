var scopedFetch = require('redux/scoped_fetch');
var fetchMock = require('fetch-mock');
var configureMockStore = require('redux-mock-store');
var thunkMiddleware = require('redux-thunk');
var itemsThunks = require('redux/thunks/items_thunks');
var ItemsActionTypes = require('redux/actions/items_action_types');
var initialState = require('redux/initial_states/initial_state');

fetchMock.useNonGlobalFetch(scopedFetch);

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

var items = [
    {
        'id': 1,
        'created_date': '2016-02-01T00:00:00Z',
        'name': 'The Persistence of Memory',
        'description': 'By Salvador Dali (1931)',
        'slug': 'the-persistence-of-memory',
        'source': 'custom',
        'url_image': 'http://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg',
    },
    {
        'id': 2,
        'created_date': '2016-02-01T00:00:00Z',
        'name': 'Ballerina in a Deaths Head',
        'description': 'By Salvador Dali (1939)',
        'slug': 'ballerina-in-a-deaths-head',
        'source': 'custom',
        'url_image': 'http://uploads2.wikiart.org/images/salvador-dali/ballerina-in-a-death-s-head.jpg',
    },
];


describe('Items Thunks', () => {

    it('should creates 2 specific actions when fetchItems is called', done => {
        scopedFetch.fetch = fetchMock.mock(/items/, items).getMock();

        const expectedActions = [
            {type: ItemsActionTypes.FETCH_ITEMS},
            {type: ItemsActionTypes.FETCH_ITEMS_SUCCEEDED, payload: items},
        ];
        const store = mockStore({}, expectedActions, err => {
            if (err) { done(err); return; }
            fetchMock.restore();
            done();
        });
        store.dispatch(itemsThunks.fetchItems());
    });

    it('should creates 2 specific actions when fetchItems is called and fails', done => {
        scopedFetch.fetch = fetchMock.mock(/items/, 500).getMock();

        const expectedActions = [
            {type: ItemsActionTypes.FETCH_ITEMS},
            {
                type: ItemsActionTypes.FETCH_ITEMS_FAILED,
                error: true,
                payload: new Error('Non-200 Response Received: 500'),
            },
        ];
        const store = mockStore(initialState, expectedActions, err => {
            if (err) { done(err); return; }
            fetchMock.restore();
            done();
        });
        store.dispatch(itemsThunks.fetchItems());
    });
});
