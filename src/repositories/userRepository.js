const { prisma } = require('../lib/prisma');

// Pegue um usuario por ID
async function getUserById(id) {
    return await prisma.user.findUnique({
        where: {id: Number(id)}
    });
}

// atualize um usuario por ID
async function updateUser(id, name, email) {
    return await prisma.user.update({
        where: {id: Number(id)},
        data: {name, email}
    })
}

// liste todos os usuarios
async function getAllUsers() {
    return await prisma.user.findMany()
}

// Crie um usuario
async function createUser(name, email) {
    return await prisma.user.create({
        data: {name, email}
    });
}

// apague um usuario por ID
async function deleteUserById(id) {
    return await prisma.user.delete({
        where: {id: Number(id)}
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUser
}