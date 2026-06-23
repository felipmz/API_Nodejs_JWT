const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/', userController.getAllUser);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;
