const Renter = require("../models/Renter");
const User = require("../models/User");

module.exports = {
  findOne: function(req, res) {
    console.log(req.body)
    Renter
      .findOne({ _id: req.body })
      .populate("forms")
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    console.log(req.body)
    Renter
    .create(req.body)
    .then(function(dbModel) {
      return User.findOneAndUpdate({ _id: req.body.userId }, {$push: { forms: dbModel._id } }, {new: true});
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err));
  }
};
