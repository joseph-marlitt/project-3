const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema ({
  fullName: {type: String, trim: true, max: 100, required: true},
  title: {type:String, max: 10},
  address: {type: Object, trim: true, max: 200, required: true},
  contactInfo: {type: Object, max: 100, required: true},
  minBeds: {type: Number, required: true},
  minBath: {type: Number, required: true},
  maxRent: {type: Number, required: true},
  creditrating: {type: Number, required: true},
  pets: {type: Boolean, required: true },
  date: {type: Date, default: Date.now}
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
