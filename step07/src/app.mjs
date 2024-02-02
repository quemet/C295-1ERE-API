import express from "express";
import { productsRouter } from "./routes/product.mjs";
import { sequelize, initDb } from "./db/sequelize.mjs";

sequelize
  .authenticate()
  .then((_) => console.log("la connection est good"))
  .catch((error) => console.error("impossibé"));
const app = express();
app.use(express.json());
const port = 3000;
initDb();
app.get("/", (req, res) =>
  res.send("chui sur une api rest ( a cause de quentin)")
);
app.get("/api", (req, res) => {
  res.redirect(`https://localhost:${port}/`);
});

app.use("/api/products", productsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
