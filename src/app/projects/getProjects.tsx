import path from "path";
import { promises as fs } from "fs";

export type Project = {
    name: string;
    description: string;
    github?: string;
    devpost?: string;
    tech: string[];
};

export async function getProjects() {
    try {
      const filePath = path.join(process.cwd(), "src/app", "project.json");
      const data = await fs.readFile(filePath, "utf8");
      return JSON.parse(data).projects as Project[];
    } catch (error) {
      console.error("Error loading projects:", error);
      return [];
    }
  }