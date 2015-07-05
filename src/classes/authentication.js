var Promise = require('bluebird');

exports.find = function(model, email, password, callback) {
  var result;
  model.query({
    where: { email: email }
  }).fetch()
  .then(function(record) {
    if (password === "password") {
      console.log("Record: " + record);
      if (typeof callback === "function") {
        callback(record);
      }
    } else {
      callback(false);
    }
  });
}

module.exports = exports;
