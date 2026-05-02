import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { createFeaturedProjects } from "../utils/projectData";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState(() => createFeaturedProjects());
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let isActive = true;

    const fetchProjects = async () => {
      setStatus("loading");

      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          let message = "GitHub API request failed";

          try {
            const errorPayload = await response.json();
            if (errorPayload?.message) {
              message = errorPayload.message;
            }
          } catch {
            // Ignore JSON parsing failures and use the default message.
          }

          throw new Error(message);
        }

        const data = await response.json();

        if (!isActive) {
          return;
        }

        setProjects(createFeaturedProjects(data));
        setStatus("success");
      } catch (error) {
        console.error(error);

        if (!isActive) {
          return;
        }

        setProjects(createFeaturedProjects());
        setStatus("error");
      }
    };

    fetchProjects();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <section className="py-xl px-6 md:px-lg lg:px-12 xl:px-16" id="artifacts">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-lg lg:mb-xl">
          <div>
            <span className="font-label-caps text-primary">PORTFOLIO</span>
            <h2 className="font-display text-h1 lg:text-5xl text-on-surface">
              My Projects
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 mx-lg bg-gradient-to-r from-violet-500/50 to-transparent"></div>
        </div>
        {/**status === "error" ? (
          <p className="mb-md text-sm text-on-surface-variant">
            GitHub preview data is temporarily unavailable, so the cards are
            showing curated fallback details.
          </p>
        ) : null **/}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
