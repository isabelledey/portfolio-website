const SkillsMatrix = () => {
  return (
    <section className="py-xl px-container-margin md:px-lg max-w-7xl mx-auto" id="expertise">
      <h2 className="font-display text-h1 text-on-surface mb-lg text-center">Technical Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="glass-card p-md rounded-2xl">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined">psychology</span>
            <h4 className="font-label-caps">AI &amp; ML</h4>
          </div>
          <ul className="space-y-sm text-on-surface-variant font-body-md">
            <li className="flex justify-between"><span>PyTorch</span> <span className="text-primary/50 text-xs">Expert</span></li>
            <li className="flex justify-between"><span>Scikit-Learn</span> <span className="text-primary/50 text-xs">Expert</span></li>
            <li className="flex justify-between"><span>Hugging Face</span> <span className="text-primary/50 text-xs">Advanced</span></li>
            <li className="flex justify-between"><span>TensorFlow</span> <span className="text-primary/50 text-xs">Mid</span></li>
          </ul>
        </div>
        <div className="glass-card p-md rounded-2xl">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined">data_object</span>
            <h4 className="font-label-caps">Frontend</h4>
          </div>
          <ul className="space-y-sm text-on-surface-variant font-body-md">
            <li className="flex justify-between"><span>React.js</span> <span className="text-primary/50 text-xs">Expert</span></li>
            <li className="flex justify-between"><span>TypeScript</span> <span className="text-primary/50 text-xs">Expert</span></li>
            <li className="flex justify-between"><span>Next.js</span> <span className="text-primary/50 text-xs">Advanced</span></li>
            <li className="flex justify-between"><span>Tailwind CSS</span> <span className="text-primary/50 text-xs">Expert</span></li>
          </ul>
        </div>
        <div className="glass-card p-md rounded-2xl">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined">database</span>
            <h4 className="font-label-caps">Backend</h4>
          </div>
          <ul className="space-y-sm text-on-surface-variant font-body-md">
            <li className="flex justify-between"><span>Node.js</span> <span className="text-primary/50 text-xs">Advanced</span></li>
            <li className="flex justify-between"><span>MsSQL</span> <span className="text-primary/50 text-xs">Advanced</span></li>
            <li className="flex justify-between"><span>PostgreSQL</span> <span className="text-primary/50 text-xs">Mid</span></li>
            <li className="flex justify-between"><span>FastAPI</span> <span className="text-primary/50 text-xs">Advanced</span></li>
          </ul>
        </div>
        <div className="glass-card p-md rounded-2xl">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined">build</span>
            <h4 className="font-label-caps">Tools</h4>
          </div>
          <ul className="space-y-sm text-on-surface-variant font-body-md">
            <li className="flex justify-between"><span>Docker</span> <span className="text-primary/50 text-xs">Mid</span></li>
            <li className="flex justify-between"><span>Vercel</span> <span className="text-primary/50 text-xs">Expert</span></li>
            <li className="flex justify-between"><span>GitHub Actions</span> <span className="text-primary/50 text-xs">Advanced</span></li>
            <li className="flex justify-between"><span>Kubernetes</span> <span className="text-primary/50 text-xs">Basic</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
