const fs = require('fs');
const _ = require('underscore');
const rimraf = require('rimraf');

const config = require('./config');
const resources = config.resources;


var raw_template = fs.readFileSync('./test_template.js', {encoding: 'utf8'});
var template = _.template(raw_template);

fs.statSync('resources').isDirectory() ? rimraf.sync('resources') : null;
fs.mkdirSync('resources');

for(var i = 0; i < resources.length; i++) {
  var resource = resources[i];
  var fixtures = require('./fixtures/'+resource);

  fs.writeFileSync('resources/' + resource + "_test.js", template({resource: resource, fixtures: fixtures}));
}
