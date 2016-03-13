var R = require('ramda');

var Utils = {
    keywords: (keywordNames) => {
        return R.zipObj(keywordNames, keywordNames);
    },
    cloneDeep: (obj) => {
        return JSON.parse(JSON.stringify(obj));
    },
};

module.exports = Utils;
