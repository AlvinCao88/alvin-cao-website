"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ToggleMode from "./ToggleMode";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 z-50 transition-all duration-500 ease-in-out text-lg md:text-2xl ${
        scrolled
          ? "bg-background shadow-md rounded-3xl border-2 border-border"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center px-6 py-3 ${
          scrolled ? "justify-between" : "justify-end"
        }`}
      >
        {scrolled && (
          <Link href="/" className="font-title text-primary">
            &lt;Alvin/&gt;
          </Link>
        )}

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="#Experience">Experience</Link>
          <Link href="/#Projects">Projects</Link>
          <ToggleMode />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden text-primary ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="flex flex-col items-start gap-3 px-6 pb-4 sm:hidden">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#Experience" onClick={toggleMenu}>
            Experience
          </Link>
          <Link href="/#Projects" onClick={toggleMenu}>
            Projects
          </Link>
          <ToggleMode />
        </div>
      )}
    </nav>
  );
};

export default NavBar;