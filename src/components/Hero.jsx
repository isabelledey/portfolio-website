import { siteContent } from "../data/siteContent";
import ButterflyField from "./ButterflyField";

const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-xl px-container-margin md:px-lg flex flex-col items-center justify-center min-h-[795px] text-center"
      id="intro"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
      </div>
      <ButterflyField />
      <div className="relative z-10 max-w-4xl">
        <span className="inline-block font-label-caps text-primary mb-sm tracking-widest">
          {siteContent.introBadge}
        </span>
        <h1 className="font-display text-display text-on-surface mb-md">
          {siteContent.heroTitle}
        </h1>
        <h2 className="font-h2 text-h2 text-secondary mb-lg">
          {siteContent.heroSubtitle}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
          {siteContent.heroDescription}
        </p>
        <div className="flex flex-wrap justify-center gap-gutter">
          <a
            href="#artifacts"
            className="border border-primary/30 bg-surface-container-high/70 text-on-surface px-8 py-4 rounded-xl font-label-caps hover:border-primary/60 hover:bg-surface-container-high transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href={`mailto:${siteContent.email}`}
            className="group relative overflow-hidden bg-gradient-to-r from-[#c9b2ff] via-[#a078ff] to-[#6D28D9] text-[#160f25] px-9 py-4 rounded-xl font-label-caps shadow-[0_18px_45px_rgba(109,40,217,0.35)] hover:scale-105 hover:shadow-[0_24px_60px_rgba(109,40,217,0.45)] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)] translate-x-[-140%] transition-transform duration-700 group-hover:translate-x-[140%]"></span>
            <span className="relative">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
