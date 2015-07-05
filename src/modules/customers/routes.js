const controller = require('./controller');
const schema = require('./schema');
const BaseRoutes = require('../../classes/base_routes.js');

var Router = new BaseRoutes(controller, schema);
var routes = Router.CRUD();

exports.map = routes;
