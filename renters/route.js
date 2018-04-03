const router = require('express').Router();
const controller = require('./controller');

router.route('/')
  // .get(controller.findAll)
  .post(controller.create);

module.exports = router;
