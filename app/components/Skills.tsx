import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt } from "react-icons/fa";
const Skills: React.FC = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <FaReact className="text-white" /> },
    { name: "TailwindCSS", icon: <FaCss3Alt className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  ];
  return (
    <section id="skills" className="py-16 px-4 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      {/* Grid: 2 columns, larger vertical gap */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="mt-4 text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
