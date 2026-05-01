const Timeline = () => {
  return (
    <section className="py-xl px-container-margin md:px-lg max-w-4xl mx-auto" id="timeline">
      <h2 className="font-display text-h1 text-on-surface mb-lg">Professional Journey</h2>
      <div className="relative border-l-2 border-white/10 ml-4 space-y-lg">
        <div className="relative pl-lg group">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-violet-500 glow-violet group-hover:scale-125 transition-transform"></div>
          <div>
            <span className="font-label-caps text-primary">Dec 2024 - Present</span>
            <h3 className="font-h2 text-h2 text-white mt-xs">AI Web Developer</h3>
            <p className="text-outline mb-md">Freelance Specialist</p>
            <p className="text-on-surface-variant font-body-md">
              Architecting bespoke AI integrations for enterprise clients, focusing on vector database implementation and RAG (Retrieval-Augmented Generation) pipelines.
            </p>
          </div>
        </div>
        <div className="relative pl-lg group">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neutral-700 transition-colors group-hover:bg-violet-500"></div>
          <div>
            <span className="font-label-caps text-outline">2022 - 2023</span>
            <h3 className="font-h2 text-h2 text-white mt-xs">Digital Forms Developer</h3>
            <p className="text-outline mb-md">Migdal Insurance</p>
            <p className="text-on-surface-variant font-body-md">
              Streamlined insurance application workflows by developing dynamic, data-driven web forms, reducing customer processing time by 40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
