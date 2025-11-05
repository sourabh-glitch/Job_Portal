import mongoose from "mongoose"

const recruiterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    jobrole: { type: String, required: true },
    email: { type: String },
    image: { type: String, required: true },
}, { timestamps: true });



const Recruiter = mongoose.model("Recruiter", recruiterSchema);
export default Recruiter;