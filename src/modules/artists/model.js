const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'artists',
  store: function () {
    return this.belongsTo(require('../stores/model'));
  },
  customers: function() {
    return this.hasMany(require('../customers/model'));
  },
  appointments: function() {
    return this.hasMany(require('../appointments/model'));
  }
};

const classProps = {
  typeName: 'artists',
  filters: {
    store_id: function (qb, value) {
      return qb.whereIn('store_id', value);
    }
  },
  relations: [
    'store',
    'customers',
    'appointments'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
