import { motion } from "framer-motion";
import { Briefcase, Users, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    icon: <Briefcase className="h-4 w-4" />,
    role: "Learnt new technologies",
    org: "MERN Stack & AI",
    period: "2025 — Present",
    body: "Designing and shipping production MERN applications for early-stage founders. Architecture, frontend, backend, deployment — end to end.",
    bullets: ["Architected and shipped 8+ production apps", "Owned cloud infra on AWS & Vercel", "Built AI features used by 10k+ users"],
  },
  {
    icon: <Users className="h-4 w-4" />,
    role: "Full Stack Intern",
    org: "Detechie Digital Academy Private Limited",
    period: "Jan 2026 — Present",
    body: "Joined as full stack intern and Leading a small group of student devs through projects, code reviews and weekly system design jams.",
    bullets: ["Mentored 4 student engineers", "Ran weekly design & review sessions", "Drove adoption of modern toolchain"],
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    role: "Freelance Full-Stack Engineer",
    org: "Self-employed",
    period: "2025 — Present",
    body: "Designing and shipping production MERN applications for early-stage founders. Architecture, frontend, backend, deployment — end to end.",
    bullets: ["Architected and shipped 3+ production apps", "Owned cloud infra on Vercel", "Built multi-features applications used by 10k+ users"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-y relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title={<>Where I've <span className="gradient-text">shipped</span>.</>}
          description="Selected roles and responsibilities across product engineering and leadership."
        />

        <div className="relative mt-10 sm:mt-14 md:mt-16">
          {/* Single rail on mobile/tablet (left), centered on desktop */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:left-1/2 lg:-translate-x-px" />
          {ITEMS.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative mb-8 grid gap-4 sm:mb-10 lg:grid-cols-2 lg:gap-12 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="hidden lg:block" />
              <div className="relative pl-12 lg:pl-0">
                <span
                  className="absolute top-2 grid h-8 w-8 place-items-center rounded-xl glass text-[#5EEAD4]"
                  style={{ left: 0 }}
                >
                  {it.icon}
                </span>
                <div className="glass rounded-2xl p-5 transition-all duration-500 hover:border-white/20 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">{it.role}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 sm:text-[11px]">{it.period}</span>
                  </div>
                  <div className="mt-1 text-sm text-[#5EEAD4]/80">{it.org}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{it.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-white/55">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
