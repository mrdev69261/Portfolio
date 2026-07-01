const TECH = [
  "React", "Node.js", "Express", "MongoDB", "Redux Toolkit",
  "Tailwind", "TypeScript", "JWT", "REST API", "Socket.io",
  "Docker", "GitHub Actions", "OpenAI",
];

export function TechMarquee() {
  const items = [...TECH, ...TECH];
  return (
    <section className="relative border-y border-white/[0.06] bg-[#1a1a1a]/40 py-6 backdrop-blur sm:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#1a1a1a] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#1a1a1a] to-transparent sm:w-32" />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
          {items.map((t, i) => (
            <span
              key={i}
              className="font-display whitespace-nowrap text-lg font-medium text-white/30 transition-colors hover:text-white/80 sm:text-2xl md:text-3xl"
            >
              {t}
              <span className="ml-8 text-white/10 sm:ml-12">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
