const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: {type: String, trim: true, max: 100},
  address: {type: Object, trim: true, max: 200},
  minimumCR: {type: String, max: 10},
  pets: {type: Boolean},
  contactInfo: {type: Object, trim: true, max: 100 },
  units: [{ type: Schema.Types.ObjectId, ref: 'Unit'}],
  // beds: {type: Array, "default": [] },
  amenities: {type: Array, "default": [] },
  lat: {type: Number},
  long: {type: Number},
  date: {type: Date, default: Date.now}
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
