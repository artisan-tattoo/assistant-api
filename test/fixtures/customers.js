var mock_resource = {
  data: {
    type: 'customer',
    'artist-id': 1,
    name: 'test customer',
    phone: '666-666-6666',
    email: 'customer@example.com',
    'date-on-waiting-list': Date.now(),
    status: 1,
    local: true,
    location: 'brooklyn, baby',
    credit: '$0.00',
    want: 'hypercard tattoo',
    notes: 'total nerd'
  }
};
var mock_update = {
  data: {
    'artist-id': 1,
    name: 'customer test',
    phone: '666-666-6666',
    email: 'customer@example.com',
    'date-on-waiting-list': Date.now(),
    status: 1,
    local: true,
    location: 'brooklyn, baby',
    credit: '$0.00',
    want: 'hypercard tattoo',
    notes: 'total nerd'
  }
};
var update_attr = "name";

exports.mock_resource = mock_resource;
exports.mock_update = mock_update;
exports.update_attr = update_attr;
