'use strict';

var productsMock = require('../../mocks/productsMock');

module.exports.getProductsList = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(productsMock.products),
    };
};