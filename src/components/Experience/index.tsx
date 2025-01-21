"use client";
import Image from "next/image";
import PFP from "@/assets/pfp.jpg";
import SpinningCube from "@/components/SpinningCube";
import { BentoBox, BentoInfo } from "@/components/BentoBox";  // Import BentoBox and BentoInfo

export default function Experience() {
  // Define BentoBox items
  const items: BentoInfo[] = [
    {
      title: 'About Me',
      description: 'I am a third-year Computer Science student specializing in software engineering. Passionate about building creative and impactful projects.',
      image: 'about-me.jpg', // Replace with the path to your image
      link: '#about-me',
    },
    {
      title: 'Something',
      description: 'Recently, I worked on a unique project integrating AI and user experience, creating interactive feedback systems.',
      image: 'something.jpg', // Replace with the path to your image
      link: '#something',
    },
    {
      title: 'Something Else',
      description: 'Outside of tech, I love exploring music and art, always finding new ways to merge creativity with technology.',
      image: 'something-else.jpg', // Replace with the path to your image
      link: '#something-else',
    },
    {
      title: 'My Skills in Programming',
      description: 'Skilled in TypeScript, React, Next.js, Python, and TensorFlow with a solid foundation in software engineering principles.',
      image: 'skills.jpg', // Replace with the path to your image
      link: '#skills',
    },
  ];

  return (
    <div
      id="Experience"
      className="flex flex-col items-center pt-10 pb-10"
    >
      <p className="font-title text-5xl mb-5">Experience</p>

      {/* BentoBox Section */}
      <BentoBox items={items} />
    </div>
  );
}
