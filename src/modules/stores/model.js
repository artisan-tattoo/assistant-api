const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'stores',
  artists: function () {
    return this.hasMany(require('../artists/model'));
  }
};

const classProps = {
  typeName: 'stores',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    }
  },
  relations: [
    'artists',
    'artists.customers',
    'artists.appointments'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
