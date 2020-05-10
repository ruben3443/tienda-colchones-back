var express = require('express');
var multer = require('multer');
var router = express.Router();
const userCtrl = require('../controllers/users.controller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const product = require('../controllers/products.controller');
const user = require('../controllers/users.controller');

router.post('/user/login', user.login);
/* GET users listing. */
router.get('', product.getImportantProducts);

router.get('/all', product.getAllProducts);

router.get('/products/:type', product.getProducts);

router.post('/products/:type', userCtrl.verifyToken, product.createProduct);

router.get('/products/:type/:id', product.getProduct);

router.put('/products/:type/:id', userCtrl.verifyToken, product.editProduct);

router.delete('/products/:type/:id', userCtrl.verifyToken, product.deleteProduct);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/imgs");
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix);

      cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });
// var upload = multer({dest:'./public'});

router.post('/upload/file', upload.any('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      console.log(err);
    }
});

module.exports = router;
