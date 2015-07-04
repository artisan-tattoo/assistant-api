const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'customers',
  artist: function () {
    return this.belongsTo(require('../artists/model'));
  },
  appointments: function() {
    return this.hasMany(require('../appointments/model'));
  }
};

const classProps = {
  typeName: 'customers',
  filters: {
    artist_id: function (qb, value) {
      return qb.whereIn('artist_id', value);
    }
  },
  relations: [
    'artist',
    'appointments'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
