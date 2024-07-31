require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('pg');

const client = new Sequelize({
  host: process.env.POSTGRES_HOST || 'postgres',
  username: process.env.POSTGRES_USER,
  port: process.env.DB_PORT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  client,
};
