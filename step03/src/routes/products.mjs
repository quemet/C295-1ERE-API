import express from "express";
import { products } from "../db/mock-product.mjs";
import { sucess } from "./helper.mjs";

const productRouter = express();

productRouter.get("/", (req, res) => {
  const message = `La liste des produits a bien été récupéré`;
  res.json(sucess(message, products));
});

productRouter.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id == producId);
  const message = `Le produit dont l'id vaut ${productId} a bien été récuperé`;
  res.json(sucess(message, product));
})

export { productRouter };
