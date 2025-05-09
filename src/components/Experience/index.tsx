"use client";
import { ProjectAccordion } from "@/components/ProjectAccordion";
import { TabInfo } from "../Projects";


export default function Experience() {
  // Define BentoBox items
  const items: TabInfo[] = [
    {
      name: 'Software Developer @ Cineplex Digital Media',
      description: '',
      image: null,
      link: '#about-me',
    }
  ];

  return (
    <div
      id="Experience"
      className="flex flex-col items-center pt-20 pb-10"
    >
      <p className="font-title text-3xl md:text-5xl mb-5">Experience</p>
      <div className="flex flex-col items-center w-full mt-5">
        {items.map((item, index) => (
          <ProjectAccordion
            key={index}
            name={item.name}
            image={item.image ?? undefined}
            description={item.description}
          />
        ))}
      </div>

      {/* BentoBox Section */}
      {/* <BentoBox items={items} /> */}
    </div>
  );
}
