const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const routeBuilder = require('express-routebuilder');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);

const app = express();

const API = require('./classes/api');
const Authentication = require('./classes/authentication');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

var Store = require('./modules/stores/model');
var Artist = require('./modules/artists/model');

passport.use(new BasicStrategy({
  },
  function(email, password, done) {
    var model = Authentication.find(Store, email, password) || Authentication.find(Artist, email, password);
    if (!model) {
      return done(null, false, { message: 'Wrong username or password' });
    } else {
      return done(null, model);
    }
  }
));

app.use(passport.initialize());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

app.get('/test', 
  passport.authenticate('basic', { session: false }),
  function (request, response) {
    response.send(request.user, null, 2);
  });

app.get('/v1', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

app.get('/', function (request, response) {
  response.redirect('/v1');
});

module.exports = app;
