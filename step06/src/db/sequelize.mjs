import { Sequelize, DataTypes } from "sequelize";
import { ProductModel } from "../models/product.mjs";
import { products } from "./mock-product.mjs";

const sequelize = new Sequelize("db_products", "root", "root", {
  host: "localhost",
  port: "6033",
  dialect: "mysql",
  logging: false,
});

const Product = ProductModel(sequelize, DataTypes);

let initDb = () => {
  return sequelize.sync({ force: true }).then((_) => {
    importProducts();
    console.log("La base de données db_products a bien été synchronisée ");
  });
};

const importProducts = () => {
  products.map((product) => {
    Product.create({
      name: product.name,
      price: product.price,
    }).then((product) => console.log(product.toJSON()));
  });
};

export { sequelize, initDb, Product };
