import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ProblemReport from "../models/problemModel.js";
import Comment from "../models/commentModel.js";

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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = createToken(user._id);
    res
      .cookie("accessToken", token, { httpOnly: true, secure: true, sameSite: "strict" })
      .status(200)
      .json({ message: "Login Successful", user , token});
  } catch (error) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password")
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
}

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed", error: err.message });
  }
};

export const addCommentToProblem = async (req, res) => {
  try {
    const { problemId, userId } = req.params;
    const { comment } = req.body;

    if (!comment || comment.trim() === "") {
      return res.status(400).json({ success: false, message: "Comment cannot be empty" });
    }

    const problem = await ProblemReport.findById(problemId);
    if (!problem) {
      return res.status(404).json({ success: false, message: "Problem not found" });
    }

    const newComment = await Comment.create({
      comment,
      userMade: userId,
      toProblem: problemId,
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { commentId, userId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    if (comment.userMade.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Unauthorized: You can only delete your own comment" });
    }

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllIssues = async (req, res) => {
  try {
    const userId = await User.findById(req.user._id).select("id")
    const problems = await ProblemReport.find({createdBy: userId}).lean();
    res.json(problems)
  } catch (error) {
    console.error("Error fetching Issues:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


export const getCommentsForProblem = async (req, res) => {
  try {
      const { problemId } = req.params;
      const problem = await ProblemReport.findById(problemId);
      if (!problem) {
          return res.status(404).json({ success: false, message: "Problem not found" });
      }

      const comments = await Comment.find({ toProblem: problemId })

      res.status(200).json({
          success: true,
          comments,
      });
  } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ success: false, message: "Server Error" });
  }
};