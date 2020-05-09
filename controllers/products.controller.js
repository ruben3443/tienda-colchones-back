const Product = require('../models/product');

const productCtrl = {};

productCtrl.getAllProducts = async (req, res) => {
    const products = await Product.find() // .select('name -_id'); El menos es para eliminar el campo (el id siempre aparece)
    res.json(products);
}

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find({type: req.params.type}) // .select('name -_id'); El menos es para eliminar el campo (el id siempre aparece)
    res.json(products);
}

productCtrl.createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        type: req.params.type,
        price: req.body.price,
        units: req.body.units,
        important: req.body.important,
        discount: req.body.discount
    });
    await product.save();
    res.json(product);
}

productCtrl.getProduct = async (req, res) => {
    const products = await Product.findById(req.params.id);
    res.json(products);
}

productCtrl.editProduct = async (req, res) => {
    const { id } = req.params;
    const product = {
        name: req.body.name,
        description: req.body.description,
        type: req.params.type,
        price: req.body.price,
        units: req.body.units,
        important: req.body.important,
        discount: req.body.discount
    };
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json(product);
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json(req.params.id);
}

module.exports = productCtrl;