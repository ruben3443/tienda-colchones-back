var express = require('express');
var multer = require('multer');
var router = express.Router();
const product = require('../controllers/products.controller');
const userCtrl = require('../controllers/users.controller');

/* POST endpoint to login user */
router.post('/user/login', userCtrl.login);

/* GET endpoint to get important products */
router.get('', product.getImportantProducts);

/* GET endpoint to get all products */
router.get('/all', product.getAllProducts);

/* GET endpoint to get products by type*/
router.get('/products/:type', product.getProducts);

/** 
* POST endpoint to create products 
* Needs authorization
*/
router.post('/products/:type', userCtrl.verifyToken, product.createProduct);

/* GET endpoint to get product by ID */
router.get('/products/:type/:id', product.getProduct);

/** 
* PUT endpoint to modify product
* Needs authorization
*/
router.put('/products/:type/:id', userCtrl.verifyToken, product.editProduct);

/** 
* DELETE endpoint to delete product
* Needs authorization
*/
router.delete('/products/:type/:id', userCtrl.verifyToken, product.deleteProduct);

// Multers storage configuration
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/imgs");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

/** 
* POST endpoint to upload products img
*/
router.post('/upload/file', upload.any('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      console.log(err);
    }
});

module.exports = router;
