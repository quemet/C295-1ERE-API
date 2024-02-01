import express from "express";
import { products } from "../db/mock-product.mjs";
import {
  success,
  getProduct,
  removeProduct,
  updateProduct,
} from "./helper.mjs";

const productRouter = express();

productRouter.get("/", (req, res) => {
  const message = `La liste des produits a bien été récupéré`;
  res.json(success(message, products));
});

productRouter.delete("/:id", (req, res) => {
  const productId = req.params.id;

  let deletedProduct = getProduct(productId);

  removeProduct(productId);

  const message = `Le produit ${deletedProduct.name} a bien été supprimé !`;

  res.json(success(message, deletedProduct));
});

productRouter.put("/:id", (req, res) => {
  const productId = req.params.id;

  const product = getProduct(productId);

  const updatedProduct = {
    id: productId,
    ...req.body,
    created: product.created,
  };
  updateProduct(productId, updatedProduct);

  const message = `Le produit ${updatedProduct.name} dont l'id vaut ${productId} a été mis à jour avec succès !`;

  res.json(success(message, updatedProduct));
});

export { productRouter };
