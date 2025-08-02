// src/components/organisms/Header.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "footer", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-800">Karthik</h1>
        <nav className="space-x-4 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="#footer" className="md:hidden text-sm font-medium text-gray-700">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;