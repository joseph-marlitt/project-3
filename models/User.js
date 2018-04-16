const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: {type: String, trim: true, max: 25, required: true},
  email: {type: String, trim: true, max: 25, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
