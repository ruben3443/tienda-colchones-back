const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductScheema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true}, //"colchones" or "somieres"
    price: {type: Number, required: true},
    units: {type: Number, required: true},
    important: {type: Boolean, require: true}, //To see if it should be shown in home page
    discount: {type: Number, require: true}, //Number with the percent of discount it has any, or zero (30% discount -> "30")
    imgPath: {type: String, require: true} //URL to access the products img
});

module.exports = mongoose.model('Product', ProductScheema);