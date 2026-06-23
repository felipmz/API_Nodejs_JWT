const userRepositorys = require('../repositories/userRepository');

async function getAllUser() {
    return await userRepositorys.getAllUsers();
}

async function getUserById(id) {
    return await userRepositorys.getUserById(id);
}

async function createUser(name, email) {
    return await userRepositorys.createUser(name, email);
}

async function updateUser(id, name, email) {
    return await userRepositorys.updateUser(id, name,email);
}

async function deleteUserById(id,name) {
    return await userRepositorys.deleteUserById(id,name);
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
};