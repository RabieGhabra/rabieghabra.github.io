"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import projects from "../data/projects";

interface ProjectPage {
title: string;
url: string;
}

interface Project {
title: string;
tech: string;
live: string;
github: string;
notes?: string;
image?: string;
pages?: ProjectPage[];
}

const pageGroups: Record<string, string[]> = {
Product: ["Product Detail Page", "Product Detail Page - Meat", "Product Listing Page", "Bakery"],
Shopping: ["Checkout", "Order Placed Successfully"],
Account: ["Sign Up", "Subscription"],
Dashboard: ["Dashboard - Edit Profile", "Dashboard - My Orders", "Dashboard - My Wishlist"],
Brochures: ["Brochures 1", "Brochures 2", "Brochures 2 v-2"],
};

const Projects: React.FC = () => {
const [activeTabs, setActiveTabs] = useState<Record<string, string>>({
"Danube Website": "Product",
});

const mainProjects = projects.filter(
(project) => project.title !== "Ghalia Landing Page",
);

const miniProjects = projects.filter(
(project) => project.title === "Ghalia Landing Page",
);

const directLinkProjects = [
"Zahrat Al-Rawdah Website",
"School Management Dashboard",
];

const renderDirectLinks = (pages: ProjectPage[]) => (
<div className="mt-4 border-t border-gray-700 pt-4">
<div className="flex flex-wrap gap-2">
{pages.map((page) => (
<a
         key={page.url}
         href={page.url}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-200 transition hover:border-blue-500"
       >
{page.title}
<span className="text-blue-400">↗</span>
</a>
))}
</div>
</div>
);

const renderProject = (project: Project) => {
const pages = project.pages || [];
const useDirectLinks = directLinkProjects.includes(project.title);
const activeTab = activeTabs[project.title] || "Product";

const visiblePages = pages.filter((page) =>
  (pageGroups[activeTab] || []).includes(page.title),
);

const isFirstProject = project.title === "Danube Website";

return (
  <div className="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 shadow-lg transition hover:scale-[1.01]">
    {isFirstProject ? (
      <div className="flex h-full flex-col min-[1024px]:flex-row">
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>

          <p className="mb-3 text-gray-400">{project.tech}</p>

          {project.notes && (
            <p className="mb-4 text-sm italic text-gray-300">
              {project.notes}
            </p>
          )}

          <div className="mt-auto flex flex-wrap gap-3 pt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
            >
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-600 px-4 py-2 transition hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>

          {pages.length > 0 && (
            <div className="mt-4 border-t border-gray-700 pt-4">
              <h4 className="mb-3 text-lg font-semibold text-white">
                Explore Different Pages of this project:
              </h4>

              <div className="mb-4 flex flex-wrap gap-2">
                {Object.keys(pageGroups).map((group) => (
                  <button
                    key={group}
                    type="button"
                    onClick={() =>
                      setActiveTabs((previous) => ({
                        ...previous,
                        [project.title]: group,
                      }))
                    }
                    className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition ${
                      activeTab === group
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-2 min-[640px]:grid-cols-2">
                {visiblePages.map((page) => (
                  <a
                    key={page.url}
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-gray-700 bg-gray-900/60 p-3 transition hover:border-blue-500 hover:bg-gray-700"
                  >
                    <span className="text-sm text-gray-200">
                      {page.title}
                    </span>
                    <span className="shrink-0 text-blue-400">↗</span>
                  </a>
                ))}
              </div>

              {visiblePages.length === 0 && (
                <p className="text-sm text-gray-400">
                  No pages in this category.
                </p>
              )}
            </div>
          )}
        </div>

        {project.image && (
          <>
            <div className="flex w-full items-center justify-center px-3 pb-5 sm:px-6 min-[1024px]:hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto max-h-105 w-full object-contain object-center"
              />
            </div>

            <div className="hidden min-w-0 flex-1 items-center justify-center p-6 min-[1024px]:flex">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto max-h-105 w-full object-contain object-center"
              />
            </div>
          </>
        )}
      </div>
    ) : (
      <div className="flex h-full flex-1 flex-col items-stretch gap-5 p-5 sm:flex-row sm:gap-4 sm:p-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>

          <p className="mb-3 text-gray-400">{project.tech}</p>

          {project.notes && (
            <p className="mb-4 text-sm italic text-gray-300">
              {project.notes}
            </p>
          )}

          {pages.length > 0 && useDirectLinks
            ? renderDirectLinks(pages)
            : pages.length > 0 && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Explore Different Pages of this project:
                  </h4>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {Object.keys(pageGroups).map((group) => (
                      <button
                        key={group}
                        type="button"
                        onClick={() =>
                          setActiveTabs((previous) => ({
                            ...previous,
                            [project.title]: group,
                          }))
                        }
                        className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition ${
                          activeTab === group
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-2 min-[640px]:grid-cols-2">
                    {visiblePages.map((page) => (
                      <a
                        key={page.url}
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 rounded-lg border border-gray-700 bg-gray-900/60 p-3 transition hover:border-blue-500 hover:bg-gray-700"
                      >
                        <span className="text-sm text-gray-200">
                          {page.title}
                        </span>
                        <span className="shrink-0 text-blue-400">↗</span>
                      </a>
                    ))}
                  </div>

                  {visiblePages.length === 0 && (
                    <p className="text-sm text-gray-400">
                      No pages in this category.
                    </p>
                  )}
                </div>
              )}

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
            >
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-600 px-4 py-2 transition hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>

        {project.image && (
          <div className="flex w-full shrink-0 items-center justify-center sm:w-[45%]">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto max-h-80 w-full object-contain object-center sm:max-h-75"
            />
          </div>
        )}
      </div>
    )}
  </div>
);

};

const renderProjectGrid = (projectList: Project[]) => {
const lastProject = projectList[projectList.length - 1];

const regularProjects = projectList.filter(
  (project) => project.title !== lastProject?.title,
);

return (
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 items-stretch gap-10 min-[1024px]:grid-cols-2">
      {regularProjects.map((project) => (
        <div
          key={project.title}
          className={
            project.title === "Danube Website"
              ? "min-w-0 min-[1024px]:col-span-2"
              : "min-w-0"
          }
        >
          {renderProject(project)}
        </div>
      ))}
    </div>

    {lastProject && (
      <div className="mt-10 flex justify-center">
        <div
          className={`w-full min-w-0 ${
            lastProject.title === "Danube Website"
              ? ""
              : "min-[1024px]:w-[calc(50%-1.25rem)]"
          }`}
        >
          {renderProject(lastProject)}
        </div>
      </div>
    )}
  </div>
);

};

return (
<section id="projects" className="bg-gray-950 px-4 py-16 text-white">
<h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>

  {renderProjectGrid(mainProjects)}

  <h2 className="mb-12 mt-20 text-center text-3xl font-bold">
    Mini Projects
  </h2>

  {renderProjectGrid(miniProjects)}
</section>

);
};

export default Projects;
