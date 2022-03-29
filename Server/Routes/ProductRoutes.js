import { Product } from "../Models/ProductModel.js";
import asyncHandler from "express-async-handler";
import express from "express";
const productRoute = express.Router();

// getting all products
productRoute.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}))


// getting single product
productRoute.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // res.status(404).send("Failed to fetch product")
    throw new Error("Product not found")
  }
}))

export default productRoute;