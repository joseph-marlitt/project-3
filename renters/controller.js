const Renter = require("../models/Renter");

module.exports = {
  findAll: function(req, res) {
    Renter
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    Renter
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(500).json(err));
  }
};
