"use client";
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-4 text-center text-white 
                 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      {/* Subtitle */}
      <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg md:text-xl">
        I’m open to full-time opportunities, freelance projects, and collaborations.
        Feel free to reach out anytime.
      </p>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a
          href="https://mail.google.com/mail/?view=cm&to=rabeea.gh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg"
        >
          <Mail size={20} />
          Send Email
        </a>
        <a
          href="https://wa.me/971553050727"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg"
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>
      </div>
      {/* Divider */}
      <div className="w-1/6 h-px bg-gray-700 mx-auto mb-12" />
      {/* Social Links */}
      <div className="flex justify-center gap-10 text-gray-400 mb-12 text-2xl md:text-3xl">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="hover:text-white transition"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/RabieGhabra"
          target="_blank"
          className="hover:text-white transition"
        >
          <Github size={32} />
        </a>
      </div>
      {/* Status */}
      <p className="text-green-400 text-base md:text-lg">
        ● Available for new opportunities
      </p>
      {/* Optional subtle background circles for depth */}
      <div className="absolute -top-12.5 -left-12.5 w-64 h-64 bg-blue-800 rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-15 -right-15 w-72 h-72 bg-green-700 rounded-full opacity-10 pointer-events-none"></div>
    </section>
  );
};
export default Contact;
