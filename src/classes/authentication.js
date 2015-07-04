var Promise = require('bluebird');

exports.find = function(model, email, password) {
  var result;
  
  model.query({
    where: { email: email }
  }).fetch()
  .then(function(record) {
    if (password === "password") {
      result = record;
      return true;
    }

    return false;
  });

  console.log(result);

  return result;
}

module.exports = exports;
