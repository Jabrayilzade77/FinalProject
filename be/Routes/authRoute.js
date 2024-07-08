import { Router } from "express";
import { UsersModel } from "../Models/UserModel.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await UsersModel.findOne({ email: email });

    if (!users) {
      res.status(404).json({ message: "User not found" });
    }
    if (users.password !== password) {
      res.status(401).json({ message: "User password is wrong" });
    }
    const token = jwt.sign(
      {
        id: users._id,
        role: users.role,
        email: users.email,
      },
      process.env.Token_Key,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {}
});

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = new UsersModel({ email, password });
    await users.save();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});
