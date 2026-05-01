const ProjectCard = ({ project }) => {
  const topics = project.topics?.length ? project.topics : [project.language || 'Technology'];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col"
    >
      <div className="h-48 overflow-hidden relative bg-surface-container-high flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent opacity-80"></div>
        <div className="relative text-center px-6">
          <span className="material-symbols-outlined text-violet-200 text-5xl">terminal</span>
          <p className="mt-4 text-on-surface-variant text-sm">{project.subtitle || 'Browse the repository'}</p>
        </div>
      </div>
      <div className="p-md flex flex-col flex-1">
        <h3 className="font-h2 text-h2 text-on-surface mb-xs">{project.name}</h3>
        <p className="text-on-surface-variant font-body-md mb-md flex-1">{project.description || 'No description available.'}</p>
        <div className="flex flex-wrap gap-xs">
          {topics.slice(0, 3).map((topic) => (
            <span key={topic} className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-xs font-label-caps">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
