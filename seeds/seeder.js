const seeder = require('mongoose-seed');
const unitSeed = require('./units.json');
const apartmentSeed = require('./apartments.json');
const data = [apartmentSeed, unitSeed];

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/Roost', function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/Apartment.js',
    'models/Unit.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Apartment', 'Unit'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

module.exports = seeder;
