import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 hover:text-blue-500" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink className="w-5 h-5 hover:text-green-500" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <Badge key={idx} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
