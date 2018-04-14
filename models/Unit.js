const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  apartment_id: {type: Schema.Types.ObjectId, ref: 'Apartment'},
  beds: {type: Number},
  baths: {type: Number},
  minRent: {type: Number},
  maxRent: {type: Number},
  available: {type: Boolean}
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
