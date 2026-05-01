import { navigationLinks, siteContent } from "../data/siteContent";

const Navbar = () => {
  return (
    <nav className="bg-neutral-950/60 backdrop-blur-xl text-violet-500 dark:text-violet-400 tracking-tight fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_8px_32px_0_rgba(139,92,246,0.1)] flex justify-between items-center h-16 px-6 md:px-12">
      <div className="text-lg font-extrabold tracking-widest text-white flex items-center gap-2">
        <span className="material-symbols-outlined">terminal</span>
        {siteContent.brandName}
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navigationLinks.map((link, index) => (
          <a
            key={link.href}
            className={
              index === 0
                ? "text-violet-400 font-bold hover:text-violet-300 transition-colors duration-300"
                : "text-neutral-400 hover:text-violet-300 transition-colors duration-300"
            }
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={`mailto:${siteContent.email}`}
        className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps hover:opacity-80 hover:scale-105 transition-all"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
