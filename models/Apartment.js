const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: {type: String, trim: true, max: 100, required: true},
  address: {type: Object, trim: true, max: 200, required: true},
  desiredCR: {type: String, max: 10},
  pets: {type: Boolean, required: true },
  contactInfo: {type: Object, trim: true, max: 100 },
  beds: {type: Array, "default": [] },
  amenities: {type: Array, "default": [] },
  date: {type: Date, default: Date.now}
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
