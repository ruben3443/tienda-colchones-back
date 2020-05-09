var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users.controller');

const user = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', userCtrl.verifyToken, user.getUsers);

router.post('/', userCtrl.verifyToken, user.createUsers);

router.get('/:id', userCtrl.verifyToken, user.getUser);

router.put('/:id', userCtrl.verifyToken, user.editUser);

router.delete('/:id', userCtrl.verifyToken, user.deleteUser);

module.exports = router;
