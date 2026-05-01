import { navigationLinks, siteContent } from "../data/siteContent";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-[60] flex flex-col h-full w-80 border-r border-white/10 bg-neutral-950/90 backdrop-blur-2xl shadow-2xl shadow-violet-900/20 divide-y divide-white/5 hidden lg:flex">
      <div className="px-6 py-12 flex flex-col items-start">
        <div className="w-16 h-16 rounded-full bg-surface-container-high mb-4 border border-violet-500/30 p-1">
          <img
            className="w-full h-full object-cover rounded-full"
            alt="Professional studio portrait of an AI engineer in a dark, atmospheric setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBooYzNQD6SHVipiuqZU5UoppfPs_niIU1raLS1ZWrJK5MzjFRDz8ud4VEwUGPQSTXj2KME0eU4_9frg3NaeuknGwzr7hG_maY3C8otI_9eSHir59Uq2Gfb-j4zuFs3aJs0fxTyxpGGWah9UtedUHRT241-7H2HtmAUmKfx7l3rnxc2FpmVRdRjRFmEYfwogBBtOPj6VAZxi6ndMntrXPSzGj1ZMLCU1r6uo5J4Cl9VnfCa5rmVfUsgNkYryA-SxlnIuGdcRdJreM"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{siteContent.leadTitle}</h3>
        <p className="text-neutral-500 text-sm">{siteContent.leadSubtitle}</p>
      </div>
      <nav className="flex-1 py-8 text-sm font-medium">
        {navigationLinks.map((link, index) => (
          <a
            key={link.href}
            className={
              index === 0
                ? "flex items-center gap-4 bg-violet-500/10 text-violet-400 border-r-4 border-violet-500 px-6 py-4 transition-all duration-200"
                : "flex items-center gap-4 text-neutral-500 px-6 py-4 hover:bg-white/5 hover:text-white transition-all duration-200"
            }
            href={link.href}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
