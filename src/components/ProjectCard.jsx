import { useState } from "react";

const fallbackPlaceholderClassName =
  "from-[#181222] via-[#3b2365] to-[#120e1d]";

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const topics = project.topics?.length ? project.topics : ["Technology"];

  const imagePath =
    project.imagePath ||
    `${import.meta.env.BASE_URL}${project.name
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}.png`;

  const projectUrl =
    typeof project.url === "string" && /^https?:\/\//.test(project.url)
      ? project.url
      : null;

  const CardTag = projectUrl ? "a" : "article";
  const showImage = Boolean(imagePath) && !imageFailed;
  const placeholderClassName =
    project.placeholderClassName || fallbackPlaceholderClassName;

  return (
    <CardTag
      href={projectUrl || undefined}
      target={projectUrl ? "_blank" : undefined}
      rel={projectUrl ? "noreferrer" : undefined}
      aria-label={projectUrl ? `Open ${project.name} on GitHub` : undefined}
      className="glass-card hover-lift rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col"
    >
      <div className="relative h-52 overflow-hidden bg-surface-container-high">
        {showImage ? (
          <img
            src={imagePath}
            alt={project.imageAlt || `Preview for ${project.name}`}
            onError={() => {
              setImageFailed(true);
            }}
            className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`absolute inset-0 bg-gradient-to-br ${placeholderClassName}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.32),_transparent_38%)]"></div>
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/10 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
      </div>
      <div className="p-md flex flex-col flex-1">
        <h3 className="font-h2 text-h2 text-on-surface mb-xs">
          {project.name}
        </h3>
        <p className="text-on-surface-variant font-body-md mb-md flex-1">
          {project.description || "No description available."}
        </p>
        <div className="flex flex-wrap gap-xs">
          {topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-xs font-label-caps"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </CardTag>
  );
};

export default ProjectCard;
