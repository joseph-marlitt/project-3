const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema ({
  firstName: {type: String, trim: true, max: 50, required: true},
  lastName: {type: String, trim: true, max: 50, required: true},
  address: {type: Object, trim: true, max: 200, required: true},
  contactInfo: {type: Object, max: 100, required: true},
  minBeds: {type: Number, required: true},
  minBaths: {type: Number, required: true},
  maxRent: {type: Number, required: true},
  creditrating: {type: Number, required: true},
  pets: {type: Boolean, required: true },
  lat: {type: Number},
  long: {type: Number},
  date: {type: Date, default: Date.now}
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
