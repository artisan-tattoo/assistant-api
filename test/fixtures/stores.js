const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const pass_hash = bcrypt.hashSync("password", salt);

var user = {
  'password-hash': pass_hash,
  name: 'default user',
  email: 'artisan@example.com'
};
var mock_resource = {
  'password-hash': pass_hash,
  name: 'test store',
  email: 'store@example.com'
};
var mock_update = {
  id: 2,
  'password-hash': pass_hash,
  name: 'store test',
  email: 'store@example.com'
};
var update_attr = "name";

exports.user = user;
exports.mock_resource = mock_resource;
exports.mock_update = mock_update;
exports.update_attr = update_attr;
