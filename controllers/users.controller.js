const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'SECRETkey1234';

const userCtrl = {};

userCtrl.login = async (req, res) => {
    var userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({email: userData.email}, (err, user) => {
        if (err) return res.status(500).send({message: "Server error"});
        if (!user){
            //Email doesn't exist
            res.status(409).send({message: 'Something is wrong'});
        }else {
            console.log("User data pass: " + userData.password);
            console.log("User pass: " + user.password);
            var resultPassword = bcrypt.compareSync(userData.password, user.password);
            if(resultPassword){
                var expiresIn = 24*60*60;
                var accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                res.json({
                    name: user.name,
                    email: user.email,
                    type: user.type,
                    user_name: user.user_name,
                    status: user.status,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                });
            }else{
                //Password is wrong
                res.status(409).send({message: "Something is wrong"})
            }
        }
    })
}

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUsers = async (req, res) => {
    var new_user = {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 10),
        type: req.body.type,
        email: req.body.email,
        user_name: req.body.user_name,
        status: req.body.status
    };
    var user = new User(new_user);
    var expiresIn = 0;
    var accessToken = "";
    await user.save((err, user) => {
        if(err && err.code==11000) return res.status(409).send('User already exists');
        if (err) return res.status(500).send('Server error');
        console.log(user);
        expiresIn = 24*60*60;
        accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
        console.log("Token: ");
        console.log(accessToken);

        res.json({
            name: user.name,
            email: user.email,
            type: user.type,
            user_name: user.user_name,
            status: user.status,
            accessToken: accessToken,
            expiresIn: expiresIn
        });
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

userCtrl.verifyToken = async (req, res, next) => {
    
    const token = req.headers['authorization'];
    
    if(token){
        jwt.verify(token, SECRET_KEY, (err, decoded) => {      
          if (err) {
            return res.json({mensaje: 'Token inválido.'});    
          } else {
            req.decoded = decoded;    
            next();
          }
        });
      } else {
        res.send({mensaje: 'Debe identificarse con un token.'});
    }
}

userCtrl.checkUsers =  async () => {
    const users_number = (await User.find()).length;
    if(users_number == 0){
        userCtrl.createFirstUsers();
        console.log("Se han creado usuarios iniciales");
    }
}

userCtrl.createFirstUsers =  async () => {

    //Usuario admin
    const user_admin = new User({
        name: "Admin",
        password: bcrypt.hashSync("password", 10),
        type: 0,
        email: "correo_admin@gmail.com",
        user_name: "admin1234",
        status: "ok"
    });
    await user_admin.save();

    //Usuario normal
    const user_normal = new User({
        name: "Pepe",
        password: bcrypt.hashSync("password", 10),
        type: 1,
        email: "correo_pepe@gmail.com",
        user_name: "pepe1234",
        status: "ok"
    });
    await user_normal.save();
}

module.exports = userCtrl;