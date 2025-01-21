import { ProjectAccordion } from '@/components/ProjectAccordion';
import PFP from "@/assets/pfp.jpg";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from 'react-icons/fa';


export default function Projects() {
  const projectTabs: TabInfo[] = [
    {
      name: 'Dispose It Right',
      link: 'https://project1.com',
      image: PFP,
      description: 'An eco-friendly waste disposal app.',
    },
    {
      name: 'Fake:It',
      image: PFP,
      link: 'https://project2.com',
      description: 'An AI tool to detect fake news.',
    },
    {
      name: 'Safe Haven/Go Here',
      image: PFP,
      link: 'https://project3.com',
      description: 'A community support app for safe spaces.',
    },
  ];

  return (
    <div id="Projects" className="flex flex-col items-center pt-10 pb-10">
      <p className="font-title text-5xl mb-2">Projects</p>
      <div className="text-accent text-sm mb-5">LAST UPDATED: 2024</div>

      <div className="flex flex-col items-center w-full mt-5">
        {projectTabs.map((tab, index) => (
          <ProjectAccordion
            key={index}
            name={tab.name}
            link={tab.link}
            image={tab.image}
            description={tab.description}
          />
        ))}
      </div>
<a
href="/projects"
  className="relative group flex items-center justify-between px-6 py-3 rounded-full border border-4 border-border bg-transparent font-medium overflow-hidden"
>
  <span className="absolute inset-0 bg-secondary scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
  
  <div className="relative z-10 flex-1 text-center text-lg font-title font-bold text-text group-hover:text-text transition-colors">
    More Projects
  </div>
  
  <FaArrowRight className="relative z-10 m-2 text-text group-hover:text-text transition-colors" />
</a>

    </div>
  );
}
