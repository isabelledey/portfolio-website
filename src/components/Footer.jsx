import { siteContent, socialLinks } from "../data/siteContent";

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-white/5 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-500/50 before:to-transparent bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-h2 text-white mb-xs">
            Let's build something intelligent together.
          </h2>
          <p className="text-neutral-600 font-label-caps">
            {siteContent.location} • {siteContent.phone} • {siteContent.email}
          </p>
        </div>
        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
              className="text-neutral-600 hover:text-violet-400 transition-all"
            >
              <span className="material-symbols-outlined">{link.icon}</span>
            </a>
          ))}
        </div>
        <div className="flex gap-gutter font-label-caps text-xs uppercase tracking-widest text-neutral-600">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="hover:text-violet-400 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
