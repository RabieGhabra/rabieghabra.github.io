import React from "react";
const SectionsPlaceholder: React.FC = () => {
  const sections = ["Projects", "Skills", "Experience", "Contact"];
  return (
    <>
      {sections.map((section) => (
        <section
          key={section}
          id={section.toLowerCase()}
          className="min-h-screen flex justify-center items-center text-center bg-gray-900 text-white mb-8"
        >
          <h2 className="text-4xl font-bold">{section}</h2>
        </section>
      ))}
    </>
  );
};
export default SectionsPlaceholder;
