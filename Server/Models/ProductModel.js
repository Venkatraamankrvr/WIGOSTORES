// import isEmail from "validator/lib/isEmail";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    require: true,
  },
  image: {
    type: "string",
    require: true,
  },
  description: {
    type: "string",
    require: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
},
  {
    timestamps: true,
  })

export const Product = mongoose.model("Product", productSchema);