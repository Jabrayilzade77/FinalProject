import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { authRouter } from './Routes/authRoute.js';
import { userRouter } from './Routes/usersRoute.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/",authRouter)
app.use("/users",userRouter)

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
    detailImages: { type: [String], default: []},
    createdAt: { type: Date, default: Date.now }
  });
  
export const ProductsModel = mongoose.model('turbolars', productsSchema); 



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

app.get("/turbolar", async (req, res) => {
  try {
    const turbolar = await ProductsModel.find();
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error fetching data", error });
  }
});

app.get("/turbolar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbolar = await ProductsModel.findById(id);
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error fetching data", error });
  }
});

app.post("/turbolar", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'detailImages', maxCount: 10 }]), async (req, res) => {
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
  
app.put("/turbolar/:id",async (req, res) => {
  try {
      const obj = req.body
      const {id} = req.params

      const turbolar = await ProductsModel.findByIdAndUpdate(id,obj)
      res.status(201).json(turbolar)
  } catch (error) {
      res.status(400).json(error)
  }
});

app.delete("/turbolar/:id", async (req, res) => {
  try {
    const { id } = req.params;
   
    const turbolar = await ProductsModel.findByIdAndDelete(id);
    res.send(turbolar);
  } catch (error) {
    res.status(500).send({ message: "Error deleting data", error });
  }
});


mongoose.connect('mongodb+srv://yusif:yusif@yusif.fup3let.mongodb.net/')
.then(() => console.log('Connected!'))
.catch((error) => console.error("Error connecting to MongoDB:", error));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
