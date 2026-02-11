"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const links: string[] = ["Projects", "Skills", "Experience", "Contact"];
  const handleLinkClick = (link: string) => {
    // Scroll to section
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo / Name */}
      <h1 className="text-xl font-bold text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        MHD Rabie Portfolio
      </h1>
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-300">
        {links.map((link) => (
          <li
            key={link}
            className="hover:text-blue-500 cursor-pointer transition"
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>
      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col gap-4 p-6 md:hidden text-gray-300">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-blue-500 cursor-pointer transition text-lg"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
