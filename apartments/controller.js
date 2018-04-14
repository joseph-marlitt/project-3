const Apartment = require("../models/Apartment");
const Unit = require("../models/Unit");

module.exports = {
  // find to include populate for beds, populate with have path of beds and match function to add conditionals to what beds populate
  findAll: function(req, res) {
    console.log(req.query)
    Apartment
      .find( { minimumCR: { $lte: req.query.credit}, pets: req.query.pets })
      .populate({
        path: 'units',
        match: { baths: { $gte: req.query.baths }, beds: { $gte: req.query.beds }, maxRent: { $lte: req.query.price }}
      })
      .sort({ date: -1 })
      .exec((err, apartments) => {
        const apartmentList = [];
        apartments = apartments.filter(function(apartment) {
            if (apartment.units.length > 0) {
              apartmentList.push(apartment);
            }
        })
        res.json(apartmentList);
      })
    },
  //find single apartment by Id - will be used by Managers to view their Apartment
  findById: function(req, res) {
    Apartment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // 2 separate requests come in, one for apartment data, and another for unit data for that apartment - both are parsed and saved to Apartments/Units DB's
  create: function(req, res) {
    const apartment = new Apartment(req.body.apartmentData);
    apartment.save(err => {
      if (err) return res.status(500).send(err);

      Unit.insertMany(req.body.unitData)
      .then(function(result) {
        return Apartment.findOneAndUpdate({ _id: apartment._id }, {$push: { units: {$each: result}}}, {new: true});
      })
      .then(function(apartment) {
        res.json(apartment);
      })
      .catch(function(err) {
        res.json(err)
      });
    });
  },
  // update Apartment data - will be used by managers to edit apartment details
  update: function(req, res) {
    Apartment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // delete Apartment
  remove: function(req, res) {
    Apartment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
