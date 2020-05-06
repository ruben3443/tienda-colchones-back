const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserScheema = new Schema({
    name: {type: String, required: true},
    type: {type: Number, required: true},
    email: {type: String, required: true},
    user_name: {type: String, required: true},
    status: {type: String, required: true}
});

module.exports = mongoose.model('User', UserScheema);