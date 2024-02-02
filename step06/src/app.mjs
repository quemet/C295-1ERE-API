import express from "express";
import { productRouter } from "./routes/products.mjs";

const app = express();

app.use(express.json());

const port = 300;

import { sequelize, initDb, Product } from "./db/sequelize.mjs";

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de données a bien été établie")
  )
  .catch((error) => console.error("Impossible de se connecter à la DB"));

initDb();

app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}`);
});

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
});
