import React, { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from 'react-icons/fa';

interface ProjectAccordionProps {
  name: string;
  link?: string;
  image?: StaticImageData;
  description?: string;
}

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ name, link, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (link) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (link) setIsHovered(false);
  };

  return (
    <a
      href={link || undefined}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`w-full relative ${!link ? 'cursor-default' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-between w-3/4 mx-auto p-5 mb-5 transition-all duration-300 border-border border-b-4 rounded-lg">
        {image && (
          <Image
            src={image}
            alt={name}
            className={`absolute w-1/2 h-auto rounded-3xl transition-all duration-300 transform ${
              isHovered ? 'opacity-100 -rotate-12 scale-50' : 'opacity-0 scale-50'
            } top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2`}
          />
        )}
        <div className="ml-5 flex-1">
          <p
            className={`font-title text-lg md:text-3xl transform transition-transform duration-300 ${isHovered ? 'translate-x-3' : 'translate-x-0'}`}
          >
            {name}
          </p>
          {description && (
            <p
              className={`text-md md:text-lg text-accent mt-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              {description}
            </p>
          )}
        </div>
        {link && (
          <div className={`flex items-center opacity-100 mr-8 transition-all duration-300`}>
            <FaArrowRight
              className={`transition-transform duration-300 ${isHovered ? 'translate-x-2 text-accent' : 'translate-x-0 text-primary'}`}
            />
          </div>
        )}
      </div>
    </a>
  );
};
