import ProblemReport from "../models/problemModel.js";
import Vote from "../models/voteModel.js";
import User from "../models/userModel.js";

export const createProblem = async(req, res)=>{
    try {
        const { title, description, category, coordinates, rating } = req.body;
        const userId = req.params.userId;

        console.log(req.body);
        if(rating <1 || rating>5){
            return res.status(400).json({success: false, message:"Rating must be between 1 and 5"})
        }

        const voteCount= rating>= 3?1: 0;

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