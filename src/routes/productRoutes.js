const express = require('express');
const productController = require('../controllers/productController');
const productRoutes = express.Router();

productRoutes.get('/', productController.getAllProduct);
productRoutes.delete('/:id', productController.deleteProductById);
productRoutes.get('/:id', productController.getProductById);
productRoutes.post('/', productController.createProduct);
productRoutes.put('/:id', productController.updateProduct);

module.exports = productRoutes;
