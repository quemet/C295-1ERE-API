import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_products", "root", "root", {
  host: "localhost",
  port: "6033",
  dialect: "mysql",
  logging: false,
});

export { sequelize };
