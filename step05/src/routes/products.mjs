import express from "express";
import {
  products,
  getProduct,
  removeProduct,
  updateProduct,
  getUniqueId,
} from "../db/mock-product.mjs";
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
});

productRouter.post("/", (req, res) => {
  const id = getUniqueId(products);
  const createdProduct = { ...req.body, ...{ id: id, created: new Date() } };
  products.push(createdProduct);
  const message = `Le produit ${createdProduct.name} a bien été crée`;
  res.json(sucess(message, createdProduct));
});

productRouter.delete("/:id", (req, res) => {
  const producId = req.params.id;
  let deletedProduct = getProduct(producId);
  removeProduct(producId);
  const message = `Le produit ${deletedProduct.name} a bien été supprimé !`;
  res.json(sucess(message, deletedProduct));
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
  res.json(sucess(message, updatedProduct));
});

export { productRouter };
