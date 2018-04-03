const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema ({
  fullName: {type: String, trim: true, max: 100, required: 'Please enter your first and last name'},
  title: {type:String, max: 10},
  street: {type: String, trim: true, max: 55, required: 'Please enter address'},
  city: {type: String, trim: true, max: 30, required: 'Please enter city name'},
  zip: {type: Number, trim: true, required: 'Please enter zipcode'},
  state: {type: String, trim: true, max: 50, required: 'Please enter state'},
  contactInfo: {type: Array, "default": [] },
  pets: {type: Array, "default": [] },
  beds: {type: Array, "default": [] },
  date: {type: Date, default: Date.now}
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
