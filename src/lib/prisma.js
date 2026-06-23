require('dotenv').config();
const { PrismaClient } = require('../../generated/prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10
});

const prisma = new PrismaClient({ adapter });
module.exports = { prisma };


/*require('dotenv').config();
const { PrismaClient } = require('../../generated/prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD || 'senha123',
  database: process.env.DB_NAME || 'mysql',
  connectionLimit: 10
});

const prisma = new PrismaClient({ adapter });
module.exports = { prisma };*/
