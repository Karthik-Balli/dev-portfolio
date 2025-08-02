// src/components/molecules/ResumeDownload.jsx
import { FaDownload } from "react-icons/fa";

export const ResumeDownload = ({ link, label = "Download Resume" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
    >
      <FaDownload className="w-4 h-4" />
      {label}
    </a>
  );
};
