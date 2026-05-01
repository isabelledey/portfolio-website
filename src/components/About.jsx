import { siteContent } from "../data/siteContent";

const About = () => {
  const aboutImagePath = `${import.meta.env.BASE_URL}isabelle-profile.png`;

  return (
    <section className="py-xl px-6 md:px-lg lg:px-12 xl:px-16 max-w-screen-xl mx-auto">
      <div className="glass-card p-lg lg:p-xl rounded-3xl flex flex-col md:flex-row lg:grid lg:grid-cols-[minmax(16rem,22rem)_1fr] items-center lg:items-start gap-lg lg:gap-xl">
        <div className="relative group hover-lift lg:justify-self-center">
          <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-primary rounded-full blur opacity-40 group-hover:opacity-90 transition-all duration-300"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-primary/30 p-2 bg-surface overflow-hidden transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]">
            <img
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              src={aboutImagePath}
              alt="Portrait of Isabelle"
            />
          </div>
        </div>
        <div className="flex-1 w-full text-left">
          <h2 className="font-h1 text-h1 lg:text-5xl text-on-surface mb-sm lg:mb-md">
            {siteContent.aboutTitle}
          </h2>
          <p className="font-body-lg text-body-lg lg:text-[1.2rem] lg:leading-8 text-on-surface-variant mb-md lg:mb-lg max-w-3xl">
            {siteContent.aboutDescription}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-md lg:gap-lg max-w-2xl">
            {siteContent.aboutStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-md py-sm lg:px-lg lg:py-md">
                <p className="text-primary font-bold text-h2 lg:text-4xl">{stat.value}</p>
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
