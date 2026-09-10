/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import projects from "../data/projects";
interface Project {
  title: string;
  tech: string;
  live: string;
  github: string;
  notes?: string;
  image?: string;
}
const Projects: React.FC = () => {
  const mainProjects = projects.filter(
    (project) => project.title !== "Ghalia Landing Page"
  );
  const miniProjects = projects.filter(
    (project) => project.title === "Ghalia Landing Page"
  );
  return (
    <section id="projects" className="py-16 px-4 bg-gray-950 text-white">
      {/* Main Projects */}
      <h2 className="text-3xl font-bold mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {mainProjects.map((project, index) => {
          const isLastOdd =
            index === mainProjects.length - 1 &&
            mainProjects.length % 2 !== 0;
          return (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl shadow-lg transition hover:scale-[1.02] flex flex-col md:flex-row ${
                isLastOdd
                  ? "lg:col-span-2 lg:w-1/2 lg:mx-auto"
                  : ""
              }`}
            >
              <div className="md:w-2/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3">
                    {project.tech}
                  </p>
                  {project.notes && (
                    <p className="text-gray-300 text-sm italic mb-4">
                      {project.notes}
                    </p>
                  )}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              {project.image && (
                <div className="md:w-3/5 p-6 flex items-stretch">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-130 object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Mini Projects */}
      <h2 className="text-3xl font-bold mt-20 mb-12 text-center">
        Mini Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {miniProjects.map((project, index) => {
          const isLastOdd =
            index === miniProjects.length - 1 &&
            miniProjects.length % 2 !== 0;
          return (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl shadow-lg transition hover:scale-[1.02] flex flex-col md:flex-row ${
                isLastOdd
                  ? "lg:col-span-2 lg:w-1/2 lg:mx-auto"
                  : ""
              }`}
            >
              <div className="md:w-2/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3">
                    {project.tech}
                  </p>
                  {project.notes && (
                    <p className="text-gray-300 text-sm italic mb-4">
                      {project.notes}
                    </p>
                  )}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              {project.image && (
                <div className="md:w-3/5 p-6 flex items-stretch">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-130 object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;