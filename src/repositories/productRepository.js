const { prisma } = require('../lib/prisma');

// liste todos os produtos
async function getAllProducts() {
    return await prisma.product.findMany();
}

// pegue esse produto por ID
async function getProductById(id) {
    return await prisma.product.findUnique({
        where: {id: Number(id)}
    });
}

// crie um produto
async function createProduct(name, price) {
    return await prisma.product.create({
        data: {name, price: parseFloat(price)}
    })
}

// apague o produto por ID
async function deleteProductById(id) {
    return await prisma.product.delete({
        where: {id: Number(id)}
    });
}

//atualize o produto por ID
async function updateProductById(id, name, price) {
    return await prisma.product.update({
        where: {id: Number(id)},
        data: {name, price: parseFloat(price)}
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    updateProductById
}