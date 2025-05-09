"use client";
import PFP from "@/assets/pfp.jpg";
// import resume from "../../assets/"
import Image from "next/image";
import SpinningCube from "@/components/SpinningCube";

export default function Hero() {
  return (
    <div
      id="home"
      className="align-center flex flex-none flex-col md:flex-row h-auto flex-nowrap space-between overflow-hidden relative w-full top-24 pb-24 pr-8 pl-0"
    >
      <div className="w-full md:w-1/2 ">
        <div className="font-title text-3xl lg:text-7xl text-primary pl-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:bg-clip-text hover:text-transparent">
          &lt;Hey, I&apos;m Alvin/&gt;
        </div>
        <div className="flex-start flex flex-none flex-col flex-nowrap gap-20 h-auto justify-center overflow-hidden p-0 relative w-full">
        <div className="text-2xl text-text mt-4 ml-6 font-body">
          I&apos;m a student at the University of Toronto, passionate about software and eager to learn. 
          <br/>Fun facts: I enjoy football not the American kind. 
</div>
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-text mt-4 ml-6 font-body border-2 border-accent py-3 px-6 rounded-xl shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-300"
            >
              📄 View Resume
            </a>
          </div>

          <div className="flex items-center text-xl border-4 border-accent border-l-0 rounded-r-full shadow-inner w-fit p-2 mt-4 font-body font-bold">
            Located in Toronto
            <div className="p-2">
              <SpinningCube />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse flex-nowrap gap-2.5 h-auto overflow-hidden w-3/5 ml-0">
        <div className="hidden md:flex flex-col items-center justify-center gap-2.5 h-full w-3/4 rounded-3xl p-4 bg-primary">
          <Image
            src={PFP}
            alt="pfp"
            className="w-full h-auto rounded-xl mx-auto"
            priority={false}
          />
          <div className="text-2xl p-2 font-title">Software Developer</div>
        </div>
      </div>
    </div>
  );
}
