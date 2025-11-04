import mongoose from "mongoose";
import express from "express";
import { productSchema } from "../Schema/schema.js";

const router = express.Router();
const Product = mongoose.model("products", productSchema);

// (Create List)
//Post a Simple Product To The Mongodb.
router.post("/", async (req, res) => {
  console.log(req.body);
  const { productName, productImg, price, details, categoryId } = req.body;
  const newProduct = new Product({
    productName,
    productImg,
    price,
    details,
    categoryId,
  });

  const result = await newProduct.save();
  res.send(result);
});

// (Read List)
// Getting All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Getting popular 4 Product
router.get("/popular", async (req, res) => {
  const popularProduct = await Product.find().limit(4);
  res.send(popularProduct);
});
// Getting Single Product By ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});
export { router as productControllers };
