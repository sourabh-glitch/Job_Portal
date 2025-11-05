import { useNavigate } from "react-router-dom";
import img1 from "../../assets/recruiters/Rec1.jpeg";
import img2 from "../../assets/recruiters/Rec2.jpeg";
import img3 from "../../assets/recruiters/Rec3.jpeg";
import img4 from "../../assets/recruiters/Rec4.jpeg";
import img5 from "../../assets/recruiters/Rec5.jpeg";
import img6 from "../../assets/recruiters/Rec6.jpeg";
import img7 from "../../assets/recruiters/Rec7.jpeg";
import img8 from "../../assets/recruiters/Rec8.jpeg";
import img9 from "../../assets/recruiters/Rec9.jpeg";
import img10 from "../../assets/recruiters/Rec10.jpeg";

import { ClipboardCopy, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const imageMap = {
  "Rec1.jpeg": img1,
  "Rec2.jpeg": img2,
  "Rec3.jpeg": img3,
  "Rec4.jpeg": img4,
  "Rec5.jpeg": img5,
  "Rec6.jpeg": img6,
  "Rec7.jpeg": img7,
  "Rec8.jpeg": img8,
  "Rec9.jpeg": img9,
  "Rec10.jpeg": img10,
};

const RecruiterCard = ({ _id, name, jobrole, image, email, onEdit, onDelete }) => {
  const imageSrc = imageMap[image] || img1;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied!");
  };

  const navigate = useNavigate();

    const handleSendMail = () => {
        navigate("/manual-send", { state: { name, email } });
    };

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg backdrop-blur-md bg-white/80 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl w-full h-fit">
      <div className="overflow-hidden relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Edit/Delete Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => onEdit(_id)}
            className="bg-white p-1.5 rounded-full shadow hover:bg-blue-100 transition"
            title="Edit"
          >
            <Pencil size={16} className="text-blue-600" />
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="bg-white p-1.5 rounded-full shadow hover:bg-red-100 transition"
            title="Delete"
          >
            <Trash2 size={16} className="text-red-600" />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-1">
        <h2 className="font-semibold text-xl text-gray-800 capitalize">{name}</h2>

        <p className="text-gray-500 text-sm">
          <span className="text-gray-700 font-medium">Job:</span> {jobrole}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-gray-700 font-medium">Email:</span>
          <span
            className="truncate max-w-[160px] text-gray-800 font-medium"
            title={email}
          >
            {email}
          </span>
          <button
            onClick={copyToClipboard}
            className="hover:text-blue-600 transition"
            title="Copy Email"
          >
            <ClipboardCopy size={16} />
          </button>
        </div>

        <div className="flex justify-between pt-4">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded-xl hover:brightness-110 transition duration-200"
          onClick={handleSendMail}
          >
            Send Mail
          </button>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 py-2 rounded-xl hover:brightness-110 transition duration-200">
            Follow Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;
