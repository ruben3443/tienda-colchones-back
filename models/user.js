const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserScheema = new Schema({
    name: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    type: {type: Number, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    user_name: {type: String, required: true, trim: true, unique: true},
    status: {type: String, required: true, trim: true}
},{
    timestamps: true
});

module.exports = mongoose.model('User', UserScheema);