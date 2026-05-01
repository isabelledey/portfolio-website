import { siteContent } from "../data/siteContent";

const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-xl px-container-margin md:px-lg flex flex-col items-center justify-center min-h-[795px] text-center"
      id="intro"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
      </div>
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
            className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white px-8 py-4 rounded-xl font-label-caps glow-violet hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href={`mailto:${siteContent.email}`}
            className="border border-primary text-primary px-8 py-4 rounded-xl font-label-caps hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
