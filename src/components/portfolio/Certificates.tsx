import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const CERTS = [
  { title: "Full-Stack Web Development", issuer: "Dice Academy", year: "2026" },
  { title: "Advanced React Patterns", issuer: "", year: "2025" },
  { title: "MongoDB for Developers", issuer: "", year: "2025" },
  // { title: "Generative AI with OpenAI", issuer: "DeepLearning.AI", year: "2026" },
  // { title: "System Design Foundations", issuer: "Educative", year: "2026" },
  // { title: "Docker & Kubernetes Essentials", issuer: "Linux Foundation", year: "2026" },
];

export function Certificates() {
  return (
    <section className="section-y relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certificates"
          title={<>Continuous <span className="gradient-text">learning</span>.</>}
          description="Selected programs and certifications I've completed along the way."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,.5), transparent 60%)" }}
              />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#5EEAD4]/20">
                  <Award className="h-4 w-4 text-[#5EEAD4]" />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">{c.year}</div>
              </div>
              <h3 className="font-display mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">{c.title}</h3>
              <p className="mt-1 text-sm text-white/55">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
