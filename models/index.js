const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./Apartment');
  require('./Renter');
  require('./User');
  require('./Unit');
};
// module.exports = {
//   Apartment: require('./Apartment'),
//   Renter: require('./Renter'),
//   User: require('./User'),
//   Unit: require('./Unit')
// };
