const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductScheema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true},
    units: {type: Number, required: true},
    important: {type: Boolean, require: true},
    discount: {type: Number, require: true}
});

module.exports = mongoose.model('Product', ProductScheema);