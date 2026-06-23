const productRepository = require('../repositories/productRepository');

async function getAllProduct() {
    return await productRepository.getAllProducts();
}

async function getProductById(id) {
    return await productRepository.getProductById(id);
}

async function createProduct(name,price) {
    return await productRepository.createProduct(name, price);
}

async function updateProduct(id,name,price) {
    return await productRepository.updateProductById(id,name,price);
}

async function deleteProductById(id) {
    return await productRepository.deleteProductById(id);
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById
};