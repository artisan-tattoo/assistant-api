var mock_resource = {
  id: 1,
  'artist-id': 1,
  'customer-id': 1,
  'date-scheduled': Date.now(),
  description: 'nerdy tattoo time'
};
var mock_update = {
  id: 1,
  'artist-id': 1,
  'customer-id': 1,
  'date-scheduled': Date.now(),
  description: 'jk'
};
var update_attr = "description";

exports.mock_resource = mock_resource;
exports.mock_update = mock_update;
exports.update_attr = update_attr;
