import { ProjectAccordion } from '@/components/ProjectAccordion';
import {StaticImageData} from "next/image";
import dispose from "@/assets/disposeitright.png";
import GoHere from "@/assets/gohere.jpg";
import fakeit from "@/assets/fakeit.png";
import website from "@/assets/OldWebsite.png";
import { FaArrowRight } from 'react-icons/fa';


export type TabInfo = {
    name: string;
    link: string;
    image: StaticImageData;
    description: string;
};

export default function Projects() {
  const projectTabs: TabInfo[] = [
    {
      name: 'Dispose It Right',
      link: 'https://devpost.com/software/dispose-it-right',
      image: dispose,
      description: 'An eco-friendly waste disposal app.',
    },
    {
      name: 'Fake:It',
      image: fakeit,
      link: 'https://devpost.com/software/fakeit',
      description: 'An AI tool that helps with mental help with different avatars.',
    },
    {
      name: 'Safe Haven/Go Here',
      image: GoHere,
      link: 'https://github.com/AlvinCao88/c01w24-project-Safe_Haven',
      description: `A app that showed locations of washroom for Crohn's and Colitis affected patients`,
    },
    {
      name: 'OLD Personal Profolio',
      image: website,
      link: 'https://alvincao88.github.io/alvin-website/',
      description: 'My old website, for future reference and to see improvements.',
    },
  ];

  return (
    <div id="Projects" className="flex flex-col items-center pt-10 pb-10">
      <p className="font-title text-5xl mb-2">Projects</p>
      <div className="text-accent text-md mb-5">Lasted Updated: JAN 2025</div>

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
