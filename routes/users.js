var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users.controller');

/** 
* GET endpoint to get all users
* Needs authorization
*/
router.get('/', userCtrl.verifyToken, userCtrl.getUsers);

/** 
* POST endpoint to create user
* Needs authorization
*/
router.post('/', userCtrl.verifyToken, userCtrl.createUsers);

/** 
* GET endpoint to get all users
* Needs authorization
*/
router.get('/:id', userCtrl.verifyToken, userCtrl.getUser);

/** 
* PUT endpoint to modify user
* Needs authorization
*/
router.put('/:id', userCtrl.verifyToken, userCtrl.editUser);

/** 
* DELETE endpoint to delete user
* Needs authorization
*/
router.delete('/:id', userCtrl.verifyToken, userCtrl.deleteUser);

module.exports = router;
