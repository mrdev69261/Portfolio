import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const TIMELINE = [
  { year: "2025", title: "Started Programming", body: "Fell in love with the web. Built first projects in HTML, CSS, JavaScript." },
  { year: "2025", title: "Frontend Development", body: "Mastered React, TypeScript, design systems, animations and accessibility." },
  { year: "2025", title: "Backend Development", body: "Shipped Node/Express APIs, MongoDB schemas, auth, queues, real-time systems." },
  { year: "2026", title: "Building Products", body: "Designing and shipping agentic, AI-first products end-to-end." },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-page grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title={<>Who <span className="gradient-text">I am</span>.</>}
        />
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="fs-sub text-white/70"
          >
            I'm <span className="text-white">Devender Kumar</span>, a BCA undergraduate
            and MERN stack developer building AI-first products. I care deeply about
            craft — clean architecture, expressive interfaces, and shipping things that
            feel inevitable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="fs-body mt-4 text-white/55"
          >
            Problem solver. Fast learner. Obsessed with clean code, performance and the
            quiet details that turn a project into a product.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {[
              "BCA Undergraduate", "MERN Stack", "AI Projects",
              "Problem Solver", "Fast Learner", "Clean Code",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* timeline */}
          <div className="relative mt-10 border-l border-white/[0.08] pl-6 sm:mt-14 sm:pl-8">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative mb-8 last:mb-0 sm:mb-10"
              >
                <span className="absolute -left-[29px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-[#252525] ring-1 ring-white/15 sm:-left-[37px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#5EEAD4]" />
                </span>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#5EEAD4]/80">{t.year}</div>
                <div className="font-display mt-1 text-base font-semibold text-white sm:text-lg">{t.title}</div>
                <p className="mt-1 text-sm text-white/55">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
