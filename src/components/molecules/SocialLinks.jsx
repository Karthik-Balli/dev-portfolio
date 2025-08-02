// src/components/molecules/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:youremail@example.com",
    icon: <FaEnvelope className="w-5 h-5" />,
    label: "Email",
  },
  {
    href: "https://drive.google.com/file/d/1P8Ok5bcP0O3-tdLAPq6x-gSu5XVvGZbl/view",
    icon: <FaFileAlt className="w-5 h-5" />,
    label: "Resume",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4 justify-center ">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-600 hover:text-black transition-colors"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
