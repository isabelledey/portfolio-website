import { siteContent } from "../data/siteContent";

const About = () => {
  const aboutImagePath = `${import.meta.env.BASE_URL}isabelle-profile.png`;

  return (
    <section className="py-xl px-container-margin md:px-lg max-w-6xl mx-auto">
      <div className="glass-card p-lg rounded-3xl flex flex-col md:flex-row items-center gap-lg">
        <div className="relative group hover-lift">
          <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-primary rounded-full blur opacity-40 group-hover:opacity-90 transition-all duration-300"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/30 p-2 bg-surface overflow-hidden transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]">
            <img
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              src={aboutImagePath}
              alt="Portrait of Isabelle"
            />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-h1 text-h1 text-on-surface mb-sm">
            {siteContent.aboutTitle}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            {siteContent.aboutDescription}
          </p>
          <div className="grid grid-cols-2 gap-md">
            {siteContent.aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-primary font-bold text-h2">{stat.value}</p>
                <p className="text-outline font-label-caps">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
