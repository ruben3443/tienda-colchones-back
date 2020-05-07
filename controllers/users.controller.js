const User = require('../models/user');

const userCtrl = {};

userCtrl.login = async (req, res) => {
    res.json({
        "status": "Han llegado los datos",
        "data": req.body
    });
}

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUsers = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        "status": "Usuario guardado",
        "data": user
    });
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        type: req.body.type,
        email: req.body.email,
        user_name: req.body.user_name,
        status: req.body.status
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        "status": "Usuario actualizado",
        "data": user
    });
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        "status": "Usuario eliminado",
        "id": req.params.id
    });
}

module.exports = userCtrl;