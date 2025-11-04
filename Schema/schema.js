import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  productImg: String,
  price: Number,
  details: String,
  categoryId: mongoose.Types.ObjectId,
});

export { productSchema };
