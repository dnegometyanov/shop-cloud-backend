'use strict';

var productsMock = require('../mocks/productsMock');

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(productsMock.products),
  };
};

module.exports.getProductsById = async (event) => {

  const { id } = event.pathParameters;

  var product = productsMock.products.find(p => p.id === id);

  if (product === undefined) {
    return {
      statusCode: 404,
      body: 'Product not found',
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};
