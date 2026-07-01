import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const SKILLS = {
  Frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "HTML", level: 90 },
    { name: "Tailwind / CSS", level: 95 },
    // { name: "Framer Motion", level: 85 },
    { name: "Redux Toolkit", level: 88 },
  ],
  Backend: [
    { name: "Node.js", level: 92 },
    { name: "REST APIs", level: 95 },
    { name: "Express", level: 80 },
    { name: "JWT / Auth", level: 88 },
    // { name: "BullMQ", level: 70 },
  ],
  Database: [
    { name: "MongoDB", level: 92 },
    { name: "Mongoose", level: 85 },
    // { name: "Redis", level: 78 },
    // { name: "Pinecone (Vector)", level: 70 },
  ],
  Language: [
    { name: "TypeScript", level: 72 },
    { name: "JavaScript", level: 86 },
  ],
  // AI: [
  //   { name: "OpenAI / Anthropic", level: 90 },
  //   { name: "LangChain", level: 80 },
  //   { name: "RAG / Embeddings", level: 82 },
  //   { name: "Agentic Systems", level: 78 },
  // ],
  Tools: [
    { name: "VS Code", level: 95 },
    { name: "Git / GitHub", level: 92 },
    { name: "Figma", level: 70 },
    { name: "Postman", level: 88 },
    { name: "Vercel", level: 74 },
  ],
};

type Cat = keyof typeof SKILLS;

export function Skills() {
  const [active, setActive] = useState<Cat>("Frontend");
  const categories = Object.keys(SKILLS) as Cat[];

  return (
    <section id="skills" className="section-y relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="gradient-text">stack</span> I move in.
            </>
          }
          description="Tap a category to see proficiency across the tools I use daily."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[260px_1fr] lg:gap-8">
          {/* Categories: 2-col grid on mobile/tablet, vertical stack on desktop */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {categories.map((c) => (
              <button
                key={c}
                onMouseEnter={() => setActive(c)}
                onClick={() => setActive(c)}
                className={`group relative flex min-h-[44px] items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm transition-all sm:px-4 sm:py-3 ${
                  active === c
                    ? "border-white/15 bg-white/[0.05] text-white"
                    : "border-white/[0.06] bg-white/[0.02] text-white/55 hover:text-white"
                }`}
              >
                <span className="font-display truncate">{c}</span>
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                    active === c ? "bg-[#5EEAD4]" : "bg-white/20"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#5EEAD4]/80 sm:text-xs">
              {active}
            </div>
            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {SKILLS[active].map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm text-white/85">{s.name}</span>
                    <span className="font-mono text-[11px] text-white/40">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      key={active + s.name}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg,#8B5CF6,#5EEAD4)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
