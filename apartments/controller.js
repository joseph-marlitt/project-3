const Apartment = require("../models/Apartment");
const Unit = require("../models/Unit");

module.exports = {
  // find to include populate for beds, populate with have path of beds and match function to add conditionals to what beds populate
  findAll: function(req, res) {
    console.log(req.body)
    Apartment
      .find(req.query)
      .populate('units')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Apartment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create should have beds.
  // create: function(req, res) {
  //   console.log(req.body)
  // Apartment
  //   .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // //   .create(req.body)
  // //   .then(dbModel => res.json(dbModel))
  // //   .catch(err => res.status(422).json(err));
  // },


// 2 separate requests come in, one for apartment data, and another for unit data for that apartment
  create: function( req, res) {
    // console.log(req.body)
    const apartment = new Apartment(req.body.apartmentData);
    // console.log(apartment)
    apartment.save(err => {
      if (err) return res.status(500).send(err);
      // return res.status(200).send(apartment);
      // console.log(req.body.unitData)
      Unit.insertMany(req.body.unitData)
      .then(function(result) {
        // console.log(apartment._id)
        console.log(result)
        // res.json(result)
        return Apartment.findOneAndUpdate({ _id: apartment._id }, {$push: { units: {$each: result}}}, {new: true});
      })
      .then(function(apartment) {
        res.json(apartment);
      })
      .catch(function(err) {
        res.json(err)
      });
      // const unit = new Unit(req.body.unitData.units);
      // console.log(unit)
      // unit.save(err => {
      //   if (err) return res.status(500).send(err)
      //   return res.status(200).send(unit);
      // })

    });
    // const unit = new Unit(req.body.units);
    // unit.save();
  },

  update: function(req, res) {
    Apartment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Apartment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
