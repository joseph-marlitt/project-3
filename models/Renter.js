const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema ({
  fullName: {type: String, trim: true, max: 100, required: true},
  title: {type:String, max: 10},
  email: {type:String, max: 100},
  street: {type: String, trim: true, max: 55, required: true},
  city: {type: String, trim: true, max: 30, required: true},
  zip: {type: Number, trim: true, required: 'Please enter zipcode'},
  state: {type: String, trim: true, max: 50, required: true},
  minBeds: {type: Number, required: true},
  minBath: {type: Number, required: true},
  maxRent: {type: Number, required: true},
  creditrating: {type: String, required: true},
  contactInfo: {type: Array, "default": [] },
  pets: {type: Boolean, required: true },
  date: {type: Date, default: Date.now}
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
