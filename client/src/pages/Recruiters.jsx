import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RecruiterCard from "../components/recruiters/RecruiterCard";
import AddRecruiterModal from "../components/recruiters/AddRecruiterModal";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function Recruiters() {

    const [search, setSearch] = useState("");
    const [recruiters, setRecruiters] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchRecruiters = async () => {
        try {
            const res = await axios.get(`${API_URL}/recruiters`);
            setRecruiters(res.data);
        } catch (err) {
            console.error('Failed to fetch recruiters', err);
        }
    };

    useEffect(() => {
        fetchRecruiters();
    }, []);


    ///edit api 
    const handleEdit =() =>{

    }

    ///delete api

    const handleDelete =() =>{
        
    }

    const filteredRecruiters = recruiters.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Recruiter Management</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add Recruiter
                </button>
            </div>

            <AddRecruiterModal
                isopen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                fetchRecruiters={fetchRecruiters}
            />

            <p className="text-gray-600 mt-2">
                Manage your recruiter database and contact information.
            </p>

            <div className="mt-4 w-full">
                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search recruiters..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                {filteredRecruiters.map((recruiter, index) => (
                    <RecruiterCard
                        key={recruiter._id || index}
                        name={recruiter.name}
                        jobrole={recruiter.jobrole}
                        email={recruiter.email}
                        image={recruiter.image}
                        onEdit={(id) => handleEdit(id)}
                        onDelete={(id) => handleDelete(id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recruiters;
