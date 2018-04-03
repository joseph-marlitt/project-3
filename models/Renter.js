const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const renterSchema = new Schema ({

})

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
