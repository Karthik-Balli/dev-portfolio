import React from "react";
import { SOCIAL_LINKS } from "../../constants/socials";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row mt-24 items-center justify-around text-center px-4 md:px-8">
      <div classname="flex items-center justify-center py-20 px-4 text-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#9929EA]">Karthik Balli</h1>
        <p className="text-base sm:text-lg max-w-xl mt-2">
          Passionate Full Stack Developer focused on building elegant and
          scalable digital products.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={SOCIAL_LINKS.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl hover:text-warmYellow transition" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-warmYellow transition" />
          </a>
          <a href={SOCIAL_LINKS.gmail} aria-label="Email">
            <FaEnvelope className="text-2xl hover:text-warmYellow transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
