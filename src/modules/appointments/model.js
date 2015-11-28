const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'appointments',
  artist: function () {
    return this.belongsTo(require('../artists/model'));
  },
  customer: function () {
    return this.belongsTo(require('../customers/model'));
  }
};

const classProps = {
  typeName: 'appointments',
  filters: {
    "artist-id": function (qb, value) {
      return qb.whereIn('artist-id', value);
    },
    "customer-id": function (qb, value) {
      return qb.whereIn('customer-id', value);
    }
  },
  relations: [
    'artist',
    'customer'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
