import express from "express";

import { productsRouter } from "./routes/products.mjs";

import { sequelize, initDb } from "./db/sequelize.mjs";

import { loginRouteur } from "./routes/login.mjs";

const app = express();

app.use(express.json());

const port = 3000;

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de donnée a bien été établie")
  )
  .catch((error) => console.error("Impossible de se connecter à la DB"));

initDb();

app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

app.get("/", (req, res) => {
  res.redirect(`http://localhost:${port}`);
});

app.use("/api/products", productsRouter);

app.use("/api/login", loginRouteur);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});
