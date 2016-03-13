var scopedFetch = require('redux/scoped_fetch');

var requestor = {
    getRequestAsync: async function(url) {
        var response = await scopedFetch.fetch(url, {
            credentials: 'same-origin',
        });
        return await this._handleResponse(response);
    },
    _handleResponse: async function(response) {
        if (!response.ok) {
            var errMessage = 'Non-200 Response Received: ' + response.status;
            return {
                error:new Error(errMessage),
            };
        } else {
            return {
                result: await response.json(),
            };
        }
    },
};

module.exports = requestor;
