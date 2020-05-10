const Product = require('../models/product');

const productCtrl = {};

productCtrl.getImportantProducts = async (req, res) => {
    const products = await Product.find({important: true}) // .select('name -_id'); El menos es para eliminar el campo (el id siempre aparece)
    res.json(products);
}

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
        discount: req.body.discount,
        imgPath: req.body.imgPath
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
        discount: req.body.discount,
        imgPath: req.body.imgPath
    };
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json(product);
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json(req.params.id);
}

productCtrl.checkProducts =  async () => {
    const products_number = (await Product.find()).length;
    if(products_number == 0){
        productCtrl.createFirstProducts();
        console.log("Se han creado productos iniciales");
    }
}

productCtrl.createFirstProducts =  async () => {
    const product_1 = new Product({
        name: "Nombre del colchón 1",
        description: "Descripcion del colchón 1 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 99,
        units: 10,
        important: true,
        discount: 20,
        imgPath: "http://localhost:3000/imgs/colchon_1.jpg"
    });
    await product_1.save();
    const product_2 = new Product({
        name: "Nombre del colchón 2",
        description: "Descripcion del colchón 2 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 199,
        units: 50,
        important: true,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/colchon_2.jpg"
    });
    await product_2.save();
    const product_3 = new Product({
        name: "Nombre del colchón 3",
        description: "Descripcion del colchón 3 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 140,
        units: 30,
        important: true,
        discount: 10,
        imgPath: "http://localhost:3000/imgs/colchon_3.jpg"
    });
    await product_3.save();
    const product_4 = new Product({
        name: "Nombre del colchón 4",
        description: "Descripcion del colchón 4 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 400,
        units: 20,
        important: true,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/colchon_4.jpg"
    });
    await product_4.save();
    const product_5 = new Product({
        name: "Nombre del colchón 5",
        description: "Descripcion del colchón 5 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 389,
        units: 70,
        important: true,
        discount: 25,
        imgPath: "http://localhost:3000/imgs/colchon_5.jpg"
    });
    await product_5.save();
    const product_6 = new Product({
        name: "Nombre del colchón 6",
        description: "Descripcion del colchón 6 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 459,
        units: 60,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/colchon_6.jpg"
    });
    await product_6.save();
    const product_7 = new Product({
        name: "Nombre del colchón 7",
        description: "Descripcion del colchón 7 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 139,
        units: 10,
        important: false,
        discount: 15,
        imgPath: "http://localhost:3000/imgs/colchon_7.jpg"
    });
    await product_7.save();
    const product_8 = new Product({
        name: "Nombre del colchón 8",
        description: "Descripcion del colchón 8 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 325,
        units: 75,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/colchon_8.jpg"
    });
    await product_8.save();
    const product_9 = new Product({
        name: "Nombre del colchón 9",
        description: "Descripcion del colchón 9 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 515,
        units: 45,
        important: false,
        discount: 40,
        imgPath: "http://localhost:3000/imgs/colchon_9.jpg"
    });
    await product_9.save();
    const product_10 = new Product({
        name: "Nombre del colchón 10",
        description: "Descripcion del colchón 10 para la prueba práctica de Ginzo",
        type: "colchones",
        price: 339,
        units: 55,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/colchon_10.jpg"
    });
    await product_10.save();
    const product_11 = new Product({
        name: "Nombre del somier 1",
        description: "Descripcion del somier 1 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 99,
        units: 10,
        important: true,
        discount: 20,
        imgPath: "http://localhost:3000/imgs/somier_1.jpg"
    });
    await product_11.save();
    const product_12 = new Product({
        name: "Nombre del somier 2",
        description: "Descripcion del somier 2 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 199,
        units: 50,
        important: true,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/somier_2.jpg"
    });
    await product_12.save();
    const product_13 = new Product({
        name: "Nombre del somier 3",
        description: "Descripcion del somier 3 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 140,
        units: 30,
        important: true,
        discount: 10,
        imgPath: "http://localhost:3000/imgs/somier_3.jpg"
    });
    await product_13.save();
    const product_14 = new Product({
        name: "Nombre del somier 4",
        description: "Descripcion del somier 4 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 400,
        units: 20,
        important: true,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/somier_4.jpg"
    });
    await product_14.save();
    const product_15 = new Product({
        name: "Nombre del somier 5",
        description: "Descripcion del somier 5 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 389,
        units: 70,
        important: true,
        discount: 25,
        imgPath: "http://localhost:3000/imgs/somier_5.jpg"
    });
    await product_15.save();
    const product_16 = new Product({
        name: "Nombre del somier 6",
        description: "Descripcion del somier 6 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 459,
        units: 60,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/somier_6.jpg"
    });
    await product_16.save();
    const product_17 = new Product({
        name: "Nombre del somier 7",
        description: "Descripcion del somier 7 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 139,
        units: 10,
        important: false,
        discount: 15,
        imgPath: "http://localhost:3000/imgs/somier_7.jpg"
    });
    await product_17.save();
    const product_18 = new Product({
        name: "Nombre del somier 8",
        description: "Descripcion del somier 8 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 325,
        units: 75,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/somier_8.jpg"
    });
    await product_18.save();
    const product_19 = new Product({
        name: "Nombre del somier 9",
        description: "Descripcion del somier 9 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 515,
        units: 45,
        important: false,
        discount: 40,
        imgPath: "http://localhost:3000/imgs/somier_9.jpg"
    });
    await product_19.save();
    const product_20 = new Product({
        name: "Nombre del somier 10",
        description: "Descripcion del somier 10 para la prueba práctica de Ginzo",
        type: "somieres",
        price: 339,
        units: 55,
        important: false,
        discount: 0,
        imgPath: "http://localhost:3000/imgs/somier_10.jpg"
    });
    await product_20.save();
}

module.exports = productCtrl;