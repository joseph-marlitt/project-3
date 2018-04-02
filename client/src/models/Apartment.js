const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: {type: String, trim: true, max: 100, required: 'Please enter apartment name'},
  street: {type: String, trim: true, max: 55, required: 'Please enter address'},
  city: {type: String, trim: true, max: 30, required: 'Please enter city name'},
  zip: {type: Number, trim: true, required: 'Please enter zipcode'},
  state: {type: String, trim: true, max: 50, required: 'Please enter state'},
  yearBuilt: {type: Number, trim: true},
  desiredCR: {type: String, max: 10},
  pets: {type: Boolean, required: false },
  // contactInfo: {type: Array, "default": [] },
  // beds: {type: Array, "default": [] },
  // [{
    // // 1 bed
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // },
    // {
    //   // two beds
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // },
    // {
    //         // three beds
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // },
    // {
    //         // four beds
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // },
    // {
    //         // five beds
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // },
    // {
    //         // six beds
    //   number: {type: Number},
    //   minRent: {type: Number},
    //   maxRent: {type: Number},
    //   available: {type: Boolean}
    // }],
  // amenities: {type: Array, "default": [] },
  date: {type: Date, default: Date.now}
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
