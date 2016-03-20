const scopedFetch = require('redux/scoped_fetch');

const requestor = {
    getRequestAsync: async function(url) {
        const response = await scopedFetch.fetch(url, {
            credentials: 'same-origin',
        });
        return await this._handleResponse(response);
    },
    _handleResponse: async function(response) {
        if (!response.ok) {
            const errMessage = 'Non-200 Response Received: ' + response.status;
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
