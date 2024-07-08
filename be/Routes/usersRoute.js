import { Router } from "express";
import { UsersModel } from "../Models/UserModel.js";
import { authMiddleWare } from "../MiddleWare/authMiddleWare.js";

export const userRouter = Router();

userRouter.get("/", authMiddleWare(["admin"]),async (req, res) => {
  const users = await UsersModel.find();

  res.send(users);
});

userRouter.get("/:id",authMiddleWare(["user","admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UsersModel.findById(id);

    if (!users) {
      return res.status(404).json({ message: "id is not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const users = new UsersModel(obj);

    await users.save();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;

    const users = await UsersModel.findByIdAndUpdate(id, obj);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.delete("/:id",authMiddleWare(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;

    const users = await UsersModel.findByIdAndDelete(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});
