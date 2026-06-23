const productService = require('../services/productService');

async function getAllProduct(req, res) {
    const result = await productService.getAllProduct();
    res.json(result);
}

async function getProductById(req, res) {
    const {id} = req.params;
    const result = await productService.getProductById(id);
    res.json(result);
}

async function createProduct(req, res) {
    const {name, price} = req.body;
    const result = await productService.createProduct(name,price);
    res.status(201).json(result);
}

async function updateProduct(req, res) {
    const {id} = req.params;
    const {name, price} = req.body;
    const result = await productService.updateProduct(id,name,price);
    res.json(result);
}

async function deleteProductById(req, res) {
    const {id} = req.params;
    const result = await productService.deleteProductById(id);
    res.json(result);
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById
};