const router = require('express').Router();
const controller = require('./controller');

router.route('/:conditions?')
  .get(controller.findAll)
  .post(controller.create);

router
  .route('/:id')
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
