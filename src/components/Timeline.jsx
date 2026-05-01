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
          <div key={`${entry.period}-${entry.role}`} className="relative pl-lg group">
            <div
              className={
                entry.active
                  ? "absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-violet-500 glow-violet group-hover:scale-125 transition-transform"
                  : "absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neutral-700 transition-colors group-hover:bg-violet-500"
              }
            ></div>
            <div>
              <span
                className={
                  entry.active
                    ? "font-label-caps text-primary"
                    : "font-label-caps text-outline"
                }
              >
                {entry.period}
              </span>
              <h3 className="font-h2 text-h2 text-white mt-xs">{entry.role}</h3>
              <p className="text-outline mb-md">{entry.organization}</p>
              <p className="text-on-surface-variant font-body-md">
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
