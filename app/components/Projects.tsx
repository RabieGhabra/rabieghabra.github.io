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
  return (
    <section id="projects" className="py-16 px-4 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      {/* Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg transition hover:scale-[1.02] flex flex-col md:flex-row"
          >
            {/* Left: Content */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.tech}</p>

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
            {/* Right: Image */}
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
        ))}
      </div>
    </section>
  );
};
export default Projects;
