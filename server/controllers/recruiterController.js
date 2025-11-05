import RecruiterModel from "../models/recruiterModel.js";

// Add recruiter
export const createrecruiter = async (req, res) => {
    try {
        const { name, email, jobrole, image } = req.body;
        const newRecruiter = await RecruiterModel.create({ name, email, jobrole,image });
        res.status(201).json(newRecruiter);
    } catch (error) {
        console.error("Create Recruiter Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Get recruiters
export const getrecruiter = async (req, res) => {
    try {
        const recruiters = await RecruiterModel.find();
        res.status(200).json(recruiters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
