import express from "express";
import { productRouter } from "./routes/products.mjs";

const app = express();

app.use(express.json());

const port = 300;

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
