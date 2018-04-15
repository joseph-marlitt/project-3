var seeder = require('mongoose-seed');
const unitSeed = require('./units.json');
const apartmentSeed = require('./apartments.json');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/Roost', function() {

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
var data = [
    apartmentSeed,unitSeed
];

module.exports = seeder;
