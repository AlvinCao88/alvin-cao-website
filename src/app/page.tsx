"use client";
import Hero from "@/components/Hero";
import SpinningCube from "./SpinningCube";
import Projects from "@/components/Projects"
import Experience from  "@/components/Experience"

export default function Home() {
  return (
    <>
      <Hero />
      <Experience/>
      <Projects/>
    </>
  );
}
