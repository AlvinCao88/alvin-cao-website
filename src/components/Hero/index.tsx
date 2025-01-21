"use client";
import PFP from "@/assets/pfp.jpg";
import Image from "next/image";
import SpinningCube from "@/components/SpinningCube";

export default function Hero() {
  return (
    <div
      id="home"
      className="align-center flex flex-none flex-row h-auto flex-nowrap space-between overflow-hidden relative w-full pt-10 pb-10 pr-8 pl-0"
      // className="flex flex-col w-full md:flex-row flex-nowrap h-auto justify-around flex-none overflow-hidden"
    >
      <div className="w-full md:w-1/2 ">
        {/* <div className="font-lora text-5xl md:text-6xl font-[1000] transition-colors duration-300 hover:text-red-500"> */}
        {/* <div className="font-lora text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> */}
        <div className="font-title text-5xl md:text-7xl  text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:bg-clip-text hover:text-transparent">
          &lt;Alvin Cao/&gt;
        </div>

      <div className="flex-start flex flex-none flex-col flex-nowrap gap-20 h-auto justify-center overflow-hidden p-0 relative w-full">
  
        <div className="mt-4 text-4xl ml-10 font-body">I develop software</div>
        <div className="flex items-center text-xl border-4 border-accent border-l-0 rounded-r-full shadow-inner w-fit p-2 mt-4 font-body font-bold">
          Located in Toronto
          <div className="p-2">
            <SpinningCube />
          </div>
        </div>
        </div>
      </div>

      <div className="flex flex-row-reverse flex-nowrap gap-2.5 h-auto overflow-hidden w-3/5 ml-0">
        <div className="flex flex-col items-center justify-center gap-2.5 h-full w-3/4 rounded-3xl p-4 bg-primary">
          <Image
            src={PFP}
            alt="pfp"
            className="w-full h-auto rounded-xl mx-auto "
            priority={false}
          />
          <div 
          className="text-2xl p-2 font-title"

          >
            Software Developer </div>
        </div>
      </div>
    </div>
  );
}
