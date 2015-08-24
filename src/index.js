const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);
const Store = require('./modules/stores/model');

const app = express();

const bcrypt = require('bcryptjs');

const API = require('./classes/api');

const secret = process.env.API_SECRET || "lolnotasecret";
const jwt = require('express-jwt');
const jwtCheck = jwt({
  secret: secret
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
  return jwtoken.sign(store_nopassword, secret, { expiresInMinutes: 60*5 });
};

app.post('/sessions/create', function(req, res) {
  if (!req.body.email || !req.body.password) {
    var error = {
      errors: [{
        "status": "400",
        "title": "Incomplete Credentials",
        "detail": "You must send the email and the password."
      }]
    };
    return res.status(400).send(JSON.stringify(error));
  }

  var store = Store.where({
    email: req.body.email
  }).fetch()
  .then(function(model) {

    if (!model || !bcrypt.compareSync(req.body.password, model.get('password-hash'))) {
      var error = {
        errors: [{
          "status": "401",
          "title": "Incorrect Credentials",
          "detail": "The email and password do not match."
        }]
      };
      return res.status(401).send(JSON.stringify(error));
    }

    res.status(201).send({
      id_token: createToken(store)
    });
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
