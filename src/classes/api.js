const path = require('path');

const express = require('express');
const routeBuilder = require('express-routebuilder');

const Endpoints = require('endpoints');

const router = express.Router();

module.exports = new Endpoints.Application({
  searchPaths: [path.join(__dirname, '..', 'modules')],
  routeBuilder: function (routes, prefix) {
    return routeBuilder(router, routes, prefix);
  },
  Controller: Endpoints.Controller.extend({
    baseUrl: '/v1',
    store: Endpoints.Store.bookshelf,
    format: Endpoints.Format.jsonapi,
    validators: [Endpoints.ValidateJsonSchema]
  })
});
