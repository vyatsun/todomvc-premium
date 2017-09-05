const router = require('express').Router();
const tasks = require('./controllers/tasks');

router.get('/', tasks.all);
router.post('/', tasks.create);
router.put('/:id', tasks.update);
router.delete('/:id', tasks.destroy);

module.exports = router;