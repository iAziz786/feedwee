const mongoose = require('mongoose');

const twitterDBConnection = mongoose.createConnection(
  process.env.MONGODB_CLUSTER_URI,
  { useNewUrlParser: true }
);

module.exports = {
  twitterDBConnection
};
