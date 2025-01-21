import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file on the server side
    const jsonPath = path.join(process.cwd(), 'src/app/project.json');
    const fileContents = await fs.readFile(jsonPath, 'utf8');
    const projects = JSON.parse(fileContents);

    // Return the projects as JSON
    return Response.json(projects);
  } catch (error) {
    return Response.json({ error: 'Failed to load projects' }, { status: 500 });
  }
} 