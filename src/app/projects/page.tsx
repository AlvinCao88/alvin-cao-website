import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import path from "path";
import { promises as fs } from "fs";

interface Project {
  name: string;
  description: string;
  github?: string;
  devpost?: string;
  tech: string[];
  year: number;
}

async function getProjects() {
  try {
    const filePath = path.join(process.cwd(), "src/app", "project.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data).projects as Project[];
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <BentoGrid>
        {projects.map((project, index) => (
          <BentoCard
            key={project.name}
            name={project.name}
            description={project.description}
            href={project.github || project.devpost || "#"}
            cta={project.github || project.devpost ? "View Project" : "Coming Soon"}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
