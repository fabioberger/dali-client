var fetch = require('whatwg-fetch');

// Note: We export fetch within this module in order to use Fetch-mock in tests
// without requiring fetch in the global scope
var scopedFetch = {
    fetch: fetch,
};

module.exports = scopedFetch;
