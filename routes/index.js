var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const product = require('../controllers/products.controller');
const user = require('../controllers/users.controller');

router.post('/login', user.login);
/* GET users listing. */
router.get('/', product.getAllProducts);

router.get('/:type', product.getProducts);

router.post('/:type', product.createProduct);

router.get('/:type/:id', product.getProduct);

router.put('/:type/:id', product.editProduct);

router.delete('/:type/:id', product.deleteProduct);

module.exports = router;
