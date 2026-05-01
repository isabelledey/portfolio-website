import { skillsSections } from "../data/siteContent";

const SkillsMatrix = () => {
  return (
    <section
      className="py-xl px-container-margin md:px-lg max-w-7xl mx-auto"
      id="expertise"
    >
      <h2 className="font-display text-h1 text-on-surface mb-lg text-center">
        Technical Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {skillsSections.map((section) => (
          <div key={section.title} className="glass-card p-md rounded-2xl">
            <div className="flex items-center gap-sm mb-md text-primary">
              <span className="material-symbols-outlined">{section.icon}</span>
              <h4 className="font-label-caps">{section.title}</h4>
            </div>
            <ul className="space-y-sm text-on-surface-variant font-body-md">
              {section.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between gap-sm">
                  <span>{skill.name}</span>
                  <span className="text-primary/50 text-xs">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
