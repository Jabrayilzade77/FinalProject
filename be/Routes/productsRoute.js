import { Router } from "express";
import express from 'express';

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { ProductsModel } from "../Models/ProductModel.js";

export const productsRouter = Router()


// __dirname and __filename for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

productsRouter.get("/", async (req, res) => {
  try {
    const turbolar = await ProductsModel.find();
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error fetching data", error });
  }
});

productsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbolar = await ProductsModel.findById(id);
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error fetching data", error });
  }
});

productsRouter.post("/", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'detailImages', maxCount: 10 }]), async (req, res) => {
  try {
    const obj = req.body;
    obj.image = `http://localhost:3000/uploads/${req.files['image'][0].filename}`;
    obj.detailImages = req.files['detailImages'].map(file => `http://localhost:3000/uploads/${file.filename}`);
    const turbolar = new ProductsModel(obj);
    await turbolar.save();
    res.send(turbolar);
  } catch (error) {
    
    
    res.status(500).send({ message: "Error saving data", error });
  }
});
  
productsRouter.put("/:id",async (req, res) => {
  try {
      const obj = req.body
      const {id} = req.params

      const turbolar = await ProductsModel.findByIdAndUpdate(id,obj)
      res.status(201).json(turbolar)
  } catch (error) {
      res.status(400).json(error)
  }
});
productsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
   
    const turbolar = await ProductsModel.findByIdAndDelete(id);
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error deleting data", error });
  }
});

productsRouter.use('/uploads', express.static(path.join(__dirname, 'uploads')));
