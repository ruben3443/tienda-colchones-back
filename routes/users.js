var express = require('express');
var router = express.Router();

const user = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', user.getUsers);

router.post('/', user.createUsers);

router.get('/:id', user.getUser);

router.put('/:id', user.editUser);

router.delete('/:id', user.deleteUser);

module.exports = router;
