import ProjectCard from "@/components/molecules/ProjectCard";

const projects = [
  {
    title: "NxtClasses",
    description: "EdTech platform connecting students with coaching centers. Built using React, Express, and MongoDB.",
    techStack: ["React", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourname/nxtclasses",
    live: "https://nxtclasses.in",
  },
  {
    title: "BayParking",
    description: "A car parking management system deployed in malls and function halls.",
    techStack: ["Next.js", "Firebase", "Tailwind"],
    github: "https://github.com/yourname/bayparking",
    live: "https://bayparking.in",
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#8B5DFF]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
