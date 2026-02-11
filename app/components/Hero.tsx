"use client";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-linear-to-br from-gray-900 via-gray-800 to-gray-950"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
        MHD Rabie Al Ghabra
      </h1>

      {/* Job title */}
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Front-End Developer & IT Engineer
      </p>

      {/* Short tagline */}
      <p className="text-gray-400 mb-8 max-w-lg">
        I create modern, responsive, and user-friendly web applications using React and Next.js.
      </p>

      {/* Action buttons */}
      <div className="flex gap-4 flex-wrap justify-center z-10">
        <a
          href="/files/MHD-Rabie-Al-Ghabra-CV.pdf"
          download
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold flex items-center gap-2"
        >
          <FaFilePdf className="text-xl" />
          Download CV
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition font-semibold"
        >
          Contact Me
        </a>
      </div>
      <div className="absolute -top-12.5 -left-12.5 w-64 h-64 bg-blue-800 rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-15 -right-15 w-72 h-72 bg-green-700 rounded-full opacity-10 pointer-events-none"></div>
    </section>
  );
};
export default Hero;
