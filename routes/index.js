'use strict';
var router = require('express').Router();
module.exports = function() {
  // router.use('/renters', require('../client/src/renters/route'));
  router.use('/apartments', require('../client/src/apartments/route'));

  // Make sure this is after all of
  // the registered routes!
  router.use(function (req, res) {
    res.status(404).end();
  });

  return router;
};
