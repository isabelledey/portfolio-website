import { timelineEntries } from "../data/siteContent";

const Timeline = () => {
  return (
    <section
      className="py-xl px-container-margin md:px-lg max-w-4xl mx-auto"
      id="timeline"
    >
      <h2 className="font-display text-h1 text-on-surface mb-lg">
        Professional Journey
      </h2>
      <div className="relative border-l-2 border-white/10 ml-4 space-y-lg">
        {timelineEntries.map((entry) => (
          <div
            key={`${entry.period}-${entry.role}`}
            className="timeline-entry relative pl-lg pr-md py-sm group"
          >
            <div
              className={
                entry.active
                  ? "absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-violet-500 glow-violet group-hover:scale-125 transition-all duration-300 group-hover:bg-violet-400"
                  : "absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neutral-700 transition-all duration-300 group-hover:scale-125 group-hover:bg-violet-500"
              }
            ></div>
            <div>
              <span
                className={
                  entry.active
                    ? "font-label-caps text-primary transition-colors duration-300 group-hover:text-violet-300"
                    : "font-label-caps text-outline transition-colors duration-300 group-hover:text-violet-300"
                }
              >
                {entry.period}
              </span>
              <h3 className="font-h2 text-h2 text-white mt-xs transition-colors duration-300 group-hover:text-violet-100">
                {entry.role}
              </h3>
              <p className="text-outline mb-md transition-colors duration-300 group-hover:text-violet-300">
                {entry.organization}
              </p>
              <p className="text-on-surface-variant font-body-md transition-colors duration-300 group-hover:text-on-surface">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
