import React from "react";
const experiences = [
  {
    role: "Front-End Web Developer",
    company: "Valus Information Technology, Dubai, UAE",
    period: "Sep 2024 – Present",
    description: "Developing modern, responsive web applications using React.js, Next.js, and TailwindCSS."
  },
  {
    role: "Computer Maintenance Technician",
    company: "Computer Development Group, Damascus, Syria",
    period: "Jul 2020 – Oct 2022",
    description: "Performed hardware and software maintenance, troubleshooting, and support for various clients."
  },
  {
    role: "Call Center Agent",
    company: "Syriatel Telecommunications, Damascus, Syria",
    period: "Jul 2019 – Mar 2020",
    description: "Provided customer support and technical guidance, achieving high customer satisfaction."
  }
];
const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gray-700"></div>
        {/* Experience Cards */}
        <div className="space-y-10 pl-12 sm:pl-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 relative"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-950"></div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="mt-1 text-gray-300">{exp.period}</p>
              <p className="mt-3 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
