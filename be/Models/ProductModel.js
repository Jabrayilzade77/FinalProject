import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    admin: String,
    city: String,
    title: String,
    marka: String,
    model: String,
    il: Number,
    motor: String,
    km: Number,
    desc: String,
    price: Number,
    image: String,
    detailImages: { type: [String], default: []}
  });
  
export const ProductsModel = mongoose.model('turbolars', productsSchema); 