import { useState } from "react";
import axios from "axios";



const recruiterImages = [
  "Rec1.jpeg", "Rec2.jpeg", "Rec3.jpeg", "Rec4.jpeg", "Rec5.jpeg",
  "Rec6.jpeg", "Rec7.jpeg", "Rec8.jpeg", "Rec9.jpeg", "Rec10.jpeg",
];
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const AddRecruiterModal = ({ isopen, onClose, fetchRecruiters }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        jobrole: "",
        image: ""
    });

    if (!isopen) return null;

    const handlesubmit = async (e) => {
        e.preventDefault();
         const randomImage = recruiterImages[Math.floor(Math.random() * recruiterImages.length)];
        try {
             const res = await axios.post(`${API_URL}/recruiters`, {
            ...form,
            image: randomImage
        });
            console.log("Recruiter added:", res.data);
            if (fetchRecruiters) fetchRecruiters();
            setForm({ name: '', email: '', jobrole: '' ,image: ""});
            onClose();
        } catch (err) {
            console.error("Error:", err);
            alert("Failed to add recruiter");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 space-y-4">
                <h2 className="text-2xl font-bold mb-2 text-center">Add Recruiter</h2>
                <form onSubmit={handlesubmit} className="space-y-4">
                    {["name", "email", "jobrole"].map((field) => (
                        <div key={field}>
                            <label className="block mb-1 capitalize text-gray-700">{field}</label>
                            <input
                                type={field === "email" ? "email" : "text"}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                value={form[field]}
                                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                required={field !== "email"}
                            />
                        </div>
                    ))}

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecruiterModal;
