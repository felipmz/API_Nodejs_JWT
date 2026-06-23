const userService = require('../services/userService');

async function getAllUser(req, res) {
    const result = await userService.getAllUser();
    res.json(result);
}

async function getUserById(req, res) {
    const {id} = req.params;
    const result = await userService.getUserById(id);
    res.json(result);
}

async function createUser(req, res) {
    const {name,email} = req.body;
    const result = await userService.createUser(name,email);
    res.status(201).json(result);
}

async function updateUser(req, res) {
    const {id} = req.params;
    const {name,email} = req.body;
    const result = await userService.updateUser(id,name,email);
    res.json(result);
}

async function deleteUserById(req, res) {
    const {id} = req.params;
    const result = await userService.deleteUserById(id);
    res.json(result);
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
};