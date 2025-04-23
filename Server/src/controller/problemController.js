import ProblemReport from "../models/problemModel.js";
import Vote from "../models/voteModel.js";
import User from "../models/userModel.js";
import Official from "../models/officialModel.js";
import mongoose from "mongoose";

export const createProblem = async (req, res) => {
    try {
        const { title, description, category, coordinates, rating } = req.body;
        const userId = req.params.userId;

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ success: false, message: "Rating must be between 1 and 5" })
        }

        const voteCount = rating >= 3 ? 1 : 0;

        const newProblem = await ProblemReport.create({
            title,
            description,
            category,
            location: {
                type: "Point",
                coordinates: coordinates,
            },
            createdBy: userId,
            voteCount,
            averageRating: rating
        })

        await Vote.create({
            user: userId,
            problem: newProblem._id,
            rating
        })

        res.status(201).json({
            success: true,
            message: "Problem reported successfully",
            problem: newProblem,
        });

    } catch (error) {
        console.error("Error creating problem report:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


export const rateProblem = async (req, res) => {
    try {
        const userId = req.params.userId;
        const problemId = req.params.problemId;

        const { rating } = req.body;


        // console.log(userId)
        // console.log(problemId)

        if (!mongoose.Types.ObjectId.isValid(problemId) || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid IDs" });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ success: false, message: "Rating must be between 1 and 5" });
        }

        const alreadyRated = await Vote.findOne({ user: userId, problem: problemId });

        if (alreadyRated) {
            return res.status(400).json({ success: false, message: "You already rated this problem" });
        }

        await Vote.create({
            user: userId,
            problem: problemId,
            rating,
        });

        if (rating >= 3) {
            await ProblemReport.findByIdAndUpdate(problemId, {
                $inc: { voteCount: 1 },
            });
        }

        const allVotes = await Vote.find({ problem: problemId });

        if (allVotes.length > 0) {
            const totalRating = allVotes.reduce((sum, vote) => sum + vote.rating, 0);
            const avgRating = totalRating / allVotes.length;
            
            // console.log(avgRating)
            await ProblemReport.findByIdAndUpdate(problemId, {
                averageRating: Number(avgRating.toFixed(2)),
            });
        }


        res.status(200).json({
            success: true,
            message: "Rating submitted successfully",
        });

    } catch (error) {
        console.error("Error rating problem:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


export const assignProblem = async(req, res)=>{
    try {
        const problemId = req.params.problemId;
        const problem = await ProblemReport.findById(problemId);

        if(!problem){
            return res.status(404).json({success: false, message:"Problem not found"});
        }

        if (problem.voteCount < 5) {
            return res.status(400).json({ success: false, message: "Votes are less than 5. Not eligible for assignment." });
        }

        if (problem.assignedTo) {
            return res.status(400).json({ success: false, message: "Problem is already assigned" });
        }

        const official = await Official.findOne({ department: problem.category });

        if (!official) {
            return res.status(404).json({ success: false, message: "No official found for this department" });
        }

        problem.assignedTo = official._id;
        problem.status = "assigned";
        await problem.save();

        official.assignedProblems.push(problemId);
        await official.save();


        res.status(200).json({
            success: true,
            message: `Problem assigned to official of ${problem.category} department`,
            problem
        });

    } catch (error) {
        console.error("Error assigning problem:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}