const mongoose = require('mongoose');
const product = require('./controllers/products.controller');
const user = require('./controllers/users.controller');

const URI = 'mongodb://localhost/proyecto-ginzo';

// Database connection with mongoose module
mongoose.connect(URI)
    .then(db => {
        //If connection is successful it provides a message and check if db is empty
        console.log('DB is connected');
        checkData();
    })
    .catch(err => console.log(err));
    
module.exports = mongoose;

// Checks if db is empty to create initial data
function checkData(){
    product.checkProducts();
    user.checkUsers();
}