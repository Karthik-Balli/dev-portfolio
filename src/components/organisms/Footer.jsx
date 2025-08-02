// src/components/organisms/Footer.jsx
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { ResumeDownload } from "@/components/molecules/ResumeDownload";
import profileImg from "../../assets/profile.jpg";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-50 border-t py-10 mt-16">
      <div className="container mx-auto text-center space-y-4">
        <img
          src={profileImg}
          alt="Karthik"
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <h2 className="text-xl font-semibold">Karthik Balli</h2>
        <p className="text-sm text-gray-500">Crafting digital experiences with warmth & simplicity</p>
        <SocialLinks />
        <ResumeDownload />
        <p className="text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} Karthik Balli. All rights reserved.</p>
      </div>
    </footer>
  );
};

 export default Footer;