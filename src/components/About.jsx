const About = () => {
  return (
    <section className="py-xl px-container-margin md:px-lg max-w-6xl mx-auto">
      <div className="glass-card p-lg rounded-3xl flex flex-col md:flex-row items-center gap-lg">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-primary rounded-full blur opacity-40 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/30 p-2 bg-surface overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              alt="Atmospheric lighting portrait of an AI developer."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKe31cCBzqNSYPUNEsiaODHEQJvGr_8bWg_lXIqukH6kd0dvhBPBt3j8c6y0X8VmD8J-nHHDwmq1TW99VaA1KQV6PNC4YKp6dZMlyKJWUduDoIz_CRjAYHcwmzEG6ZpC7yqdzH2DlNpiR32v6L8N0lsT1IeEElqfwrsyoWIaZ2YpKJGlE8KPGy01gfLcMQeO8VVDB1pmguvO1voVil0zKjOpHnlmDATJd8u2rCLPKbT3NksQci6yNIL0plUBSUKtgZQNsCeM9xxxPJ"
            />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-h1 text-h1 text-on-surface mb-sm">Architecture of Mind</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            I am a B.Sc. Computer Science student at HIT, specializing in ML pipelines and AI-driven web applications. My approach combines the rigor of computer science with the agility of modern full-stack development.
          </p>
          <div className="grid grid-cols-2 gap-md">
            <div>
              <p className="text-primary font-bold text-h2">15+</p>
              <p className="text-outline font-label-caps">AI Deployments</p>
            </div>
            <div>
              <p className="text-primary font-bold text-h2">Top 5%</p>
              <p className="text-outline font-label-caps">ML Class Performant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
