import { useLocation } from "react-router-dom";

const ManualSend = () => {
    const location = useLocation();
    const { name, email } = location.state || {};

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Send Email</h1>
            <div className="space-y-4 max-w-lg mx-auto">
                <input value={name} readOnly className="w-full border p-3 rounded-md" placeholder="Name" />
                <input value={email} readOnly className="w-full border p-3 rounded-md" placeholder="Email" />
                <textarea placeholder="Write your message..." className="w-full border p-3 rounded-md h-40"></textarea>
                <button className="bg-blue-600 text-white font-bold px-4 py-3 rounded-md w-full">Send Email</button>
            </div>
        </div>
    );
};

export default ManualSend;
