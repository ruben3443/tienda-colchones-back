const mongoose = require('mongoose');
const product = require('./controllers/products.controller');
const user = require('./controllers/users.controller');



const URI = 'mongodb://localhost/proyecto-ginzo';

mongoose.connect(URI)
    .then(db => {
        console.log('DB is connected');
        checkData();
    })
    .catch(err => console.log(err));
    
module.exports = mongoose;

//const products = (await Product.find()).length

function checkData(){
    product.checkProducts();
    user.checkUsers();
}