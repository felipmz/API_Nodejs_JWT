// src/server.js — Ponto de entrada do servidor
const dotenv = require('dotenv').config();

const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/product', productRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
