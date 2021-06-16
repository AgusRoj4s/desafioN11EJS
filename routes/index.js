const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productos = require('../api/productos');


module.exports = () => {
    router.get('/productos/vista', (req, res) => {
        let prod = productos.listar();
        console.log(prod);
        res.render('form', { prod });
    });

    router.get('/productos/listar', productController.getProducts);
    router.get('/productos/listar/:id', productController.getOneProduct);
    router.post('/productos/guardar', productController.saveProduct);
    router.put('/productos/actualizar/:id', productController.updateProduct);
    router.delete('/productos/borrar/:id', productController.deleteProduct);

    return router;
};