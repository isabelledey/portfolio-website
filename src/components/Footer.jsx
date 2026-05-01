const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-white/5 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-500/50 before:to-transparent bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-h2 text-white mb-xs">Let's build something intelligent together.</h2>
          <p className="text-neutral-600 font-label-caps">Holon • +972 53-2323919 • isabelle90098@gmail.com</p>
        </div>
        <div className="flex items-center gap-8">
          <a href="mailto:isabelle90098@gmail.com" className="text-neutral-600 hover:text-violet-400 transition-all">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a href="https://github.com/isabelle90098" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-violet-400 transition-all">
            <span className="material-symbols-outlined">hub</span>
          </a>
          <a href="https://www.linkedin.com/in/isabelle90098" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-violet-400 transition-all">
            <span className="material-symbols-outlined">public</span>
          </a>
        </div>
        <div className="flex gap-gutter font-label-caps text-xs uppercase tracking-widest text-neutral-600">
          <a href="mailto:isabelle90098@gmail.com" className="hover:text-violet-400 transition-all">Email</a>
          <a href="https://www.linkedin.com/in/isabelle90098" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-all">LinkedIn</a>
          <a href="https://github.com/isabelle90098" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-all">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
