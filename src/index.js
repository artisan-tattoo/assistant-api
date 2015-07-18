const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);

const app = express();

const API = require('./classes/api');
const Authentication = require('./classes/authentication');

const JWT = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;

var Store = require('./modules/stores/model');

var opts = {}
opts.secretOrKey = 'secret';
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
/*
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
*/
}));

/*
passport.use(new BasicStrategy({
  },
  function(email, password, done) {
    Authentication.find(Store, email, password, function(model) {
      if (!model) {
        return done(null, false, { message: 'Wrong username or password' });
      } else {
        return done(null, model);
      }
    });
  }
));
*/

app.use(passport.initialize());

app.use('*', cors({
          origin: '*',
          allowedHeaders: ['Authorization', 'Content-Type'],
            methods: ['PUT', 'POST', 'PATCH', 'DELETE', 'GET', 'HEAD']
}));

app.use(passport.authenticate('jwt', { session: false }));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

app.get('/v1', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

app.get('/sessions', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

app.get('/', function (request, response) {
  response.redirect('/v1');
});

app.post('/signup', function(request, response) {
  var token = JWT.sign(opts, "lolfornow" );
  response.json({ token: token });
});


module.exports = app;
