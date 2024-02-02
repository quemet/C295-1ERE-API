import express from "express";
import { products } from "../db/mock-product.mjs";
import { sucess } from "./helper.mjs";

const productRouter = express();

productRouter.get("/", (req, res) => {
  const message = `La liste des produits a bien été récupéré`;
  res.json(sucess(message, products));
});

export { productRouter };
