'use strict';
var router = require('express').Router();
module.exports = function() {
  router.use('/renters', require('../renters/route'));
  router.use('/apartments', require('../apartments/route'));
  router.get('/dashboard', (req, res) => {
    res.status(200).json({
      message:"You're authorized to see this secret message.",
      user: req.user
    });
  });
  // router.use('/users', require('../users/route'));

  // Make sure this is after all of
  // the registered routes!
  router.use(function (req, res) {
    // res.sendFile(path.join(__dirname, "../client/build/index.html"));

    res.status(404).end();
  });

  return router;
};
