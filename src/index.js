const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);
const Store = require('./modules/stores/model');

const app = express();

const API = require('./classes/api');

const config = require('./config.json');
const jwt = require('express-jwt');
const jwtCheck = jwt({
  secret: config.secret
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

app.get('/v1', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

const jwtoken = require('jsonwebtoken');

var createToken = function(store) {
  var store_nopassword = delete store.password;
  return jwtoken.sign(store_nopassword, config.secret, { expiresInMinutes: 60*5 });
};

app.post('/sessions/create', function(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("You must send the email and the password");
  }

  var store = Store.where({
    email: req.body.email
  }).fetch()
  .then(function(model) {
    return model;
  });

  if (!store || ("password" !== req.body.password) ) {
    return res.status(401).send("The email and password do not match.");
  }

  res.status(201).send({
    id_token: createToken(store)
  });
});

app.get('/', function (request, response) {
  response.redirect('/v1');
});

app.use(jwtCheck);

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

module.exports = app;
