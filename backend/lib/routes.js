const pingRoute = require('./routes/ping');
const postEstate = require('./routes/post-estate');
const getEstate = require('./routes/get-estate');

module.exports = [
  pingRoute,
  postEstate,
  getEstate
];
