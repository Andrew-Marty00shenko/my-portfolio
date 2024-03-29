const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

module.exports = new Sequelize(
  process.env.DATABASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: "postgres",
  }
);
