const Bookshelf = require('./database');

const instanceProps = {};
const classProps = {
  transaction: Bookshelf.transaction.bind(Bookshelf),
  exists: function(prop, value) {
    this.where(prop, value)
    .fetch()
    .then(function(model) {
      return model === undefined;
    });
  }
};

module.exports = Bookshelf.Model.extend(instanceProps, classProps);
