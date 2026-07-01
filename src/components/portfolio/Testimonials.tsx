import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  { quote: "Devender has the rare combination of taste, depth and speed. He shipped a complete AI workflow product for us in weeks, not months.", name: "Aarav Mehta", title: "Founder, Northform AI" },
  { quote: "The level of polish in the UI and the rigor in the backend were both senior-engineer grade. He's now my first call for product work.", name: "Riya Kapoor", title: "CTO, Lumen Labs" },
  { quote: "He doesn't just code — he thinks about the product, the user, the architecture. Quietly one of the strongest engineers I've worked with.", name: "Marcus Reyes", title: "Engineering Lead, Vector Stack" },
  { quote: "Beautiful interfaces, clean abstractions, fast iteration. Devender turned our prototype into a production product in record time.", name: "Sana Iqbal", title: "Product Manager, Helio" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-y relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What people <span className="gradient-text">say</span>.</>}
          align="center"
        />
        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
          <Quote className="absolute -top-3 left-2 h-8 w-8 text-white/[0.08] sm:-top-4 sm:left-4 sm:h-10 sm:w-10" />
          {/* Auto-sizing stage: render active card in flow, absolute-stack the others for crossfade */}
          <div className="relative">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === i;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`glass-strong rounded-3xl p-6 sm:p-8 md:p-10 ${isActive ? "relative" : "pointer-events-none absolute inset-0"}`}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                  aria-hidden={!isActive}
                >
                  <p className="font-display fs-sub text-white/90">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3 sm:mt-6">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#5EEAD4] font-display text-sm font-semibold text-black">
                      {t.name.split(" ").map((p) => p[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-white">{t.name}</div>
                      <div className="truncate text-xs text-white/50">{t.title}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-[#8B5CF6] to-[#5EEAD4]" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
