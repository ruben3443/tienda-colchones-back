var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const product = require('../controllers/products.controller');
const user = require('../controllers/users.controller');

router.post('/user/login', user.login);
/* GET users listing. */
router.get('', product.getAllProducts);

router.get('/products/:type', product.getProducts);

router.post('/products/:type', product.createProduct);

router.get('/products/:type/:id', product.getProduct);

router.put('/products/:type/:id', product.editProduct);

router.delete('/products/:type/:id', product.deleteProduct);

module.exports = router;
