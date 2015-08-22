const path = require('path');

const express = require('express');
const routeBuilder = require('express-routebuilder');

const Endpoints = require('endpoints');

const router = express.Router();
var to_underscore = function(string) {
  return string.replace(/-/g, '_');
}

router.use(function(req, res, next) {
  if(req.body.data) {
    var attrs = Object.keys(req.body.data.attributes);
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].indexOf('-') !== -1) {
        req.body.data.attributes[to_underscore(attrs[i])] = req.body.data.attributes[attrs[i]];
        delete req.body.data.attributes[attrs[i]];
      }
    }
  }

  next();
});

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
