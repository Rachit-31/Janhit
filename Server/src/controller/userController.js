import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const createToken = (userId) => {
    return jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "7d",
    });
};

export const signupUser = async (req, res) => {
    try {
      const { name, email, password, phone, location } = req.body;
    //   console.log(req.body)
      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        location,
      });
  
      const token = createToken(newUser._id);
      res
        .cookie("accessToken", token, { httpOnly: true, secure: true })
        .status(201)
        .json({ message: "Signup successful", user: newUser });
    } catch (err) {
      res.status(500).json({ message: "Signup error", error: err.message });
    }
  };