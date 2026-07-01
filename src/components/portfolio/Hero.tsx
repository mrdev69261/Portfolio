import { motion } from "framer-motion";
import { memo } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const TECH_NODES = [
  { label: "React", x: "8%", y: "12%", delay: 0 },
  { label: "Node.js", x: "68%", y: "8%", delay: 0.08 },
  { label: "MongoDB", x: "74%", y: "64%", delay: 0.16 },
  { label: "Docker", x: "6%", y: "70%", delay: 0.24 },
  { label: "OpenAI", x: "48%", y: "82%", delay: 0.32 },
  { label: "TS", x: "36%", y: "26%", delay: 0.4 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28"
    >
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.35fr_1fr] md:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/70 backdrop-blur md:mx-0"
          >
            {/* <span className="relative inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5EEAD4]">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#5EEAD4] opacity-75" />
            </span> */}
            <span className="truncate">Available for full-stack & AI roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display fs-hero mt-4 font-bold tracking-tight sm:mt-5"
          >
            <span className="block text-white/50">Hi, I'm</span>
            <span className="block gradient-text">Devender Kumar</span>
            <span className="block text-white">MERN Stack</span>
            <span className="block text-white/40">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="fs-body mx-auto mt-4 max-w-xl text-white/60 md:mx-0"
          >
            I build scalable, production-grade web applications with{" "}
            <span className="text-white/90">AI-first experiences</span>. Crafting architecture,
            interface, and intelligence into products people remember.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto mt-6 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:mx-0 md:justify-start"
          >
            <MagneticButton
              onClick={() => {
                location.hash = "#projects";
              }}
              className="w-full sm:w-auto"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 flex items-center justify-center gap-3 text-white/40 sm:mt-8 md:justify-start"
          >
            <a
              href="https://www.github.com/mrdev69261"
              target="_blank"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-lg transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/devender-webdev"
              target="_blank"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-lg transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:devenderkumar68667@gmail.com"
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-lg transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <div className="ml-1 hidden h-px w-12 bg-white/10 lg:block" />
            <span className="hidden font-mono text-[11px] tracking-widest lg:inline">SCROLL</span>
          </motion.div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[360px] sm:block sm:max-w-[380px] md:max-w-none md:justify-self-end lg:max-w-[540px]">
          <Workspace />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="container-page mt-8 hidden sm:block md:mt-12"
      >
        <div className="glass-strong relative mx-auto flex max-w-md items-center gap-4 rounded-2xl p-4">
          <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#5EEAD4]/20">
            <Sparkles className="h-4 w-4 text-[#5EEAD4]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 sm:text-[11px]">
              <span className="relative inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5EEAD4]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#5EEAD4] opacity-75" />
              </span>
              Currently Building
            </div>
            <div className="font-display mt-0.5 truncate text-sm font-semibold text-white">
              Bihar Wedding Photography<span className="text-white/40"> - Create Memories</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const Workspace = memo(function Workspace() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="absolute h-[88%] w-[88%] rounded-full border border-white/5"
          style={{ animation: "gradient-spin 70s linear infinite" }}
        />
        <div
          className="absolute h-[68%] w-[68%] rounded-full border border-white/[0.07]"
          style={{ animation: "gradient-spin 100s linear infinite reverse" }}
        />
        <div className="absolute h-[48%] w-[48%] rounded-full border border-dashed border-white/10" />
      </div>

      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="absolute left-1/2 top-1/2 h-36 w-[78%] max-w-[300px] -translate-x-1/2 -translate-y-1/2 sm:h-40 md:h-44"
      >
        <div className="glass-strong relative h-full w-full overflow-hidden rounded-2xl p-3 shadow-[0_20px_56px_-30px_rgba(139,92,246,.55)] sm:p-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-white/15 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-white/15 sm:h-2.5 sm:w-2.5" />
            <span className="ml-auto truncate font-mono text-[9px] text-white/30 sm:text-[10px]">
              reasonloop.ts
            </span>
          </div>
          <pre className="mt-2 overflow-hidden font-mono text-[10px] leading-relaxed text-white/70 sm:mt-3 sm:text-[11px]">
            {`const agent = createAgent({
  model: "gpt-5",
  tools: [search, code, rag],
  memory: vector(mongo),
});

`}
            <span className="text-[#5EEAD4]">await agent.run(intent);</span>
          </pre>
          <div className="absolute -bottom-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent" />
        </div>
      </motion.div>

      {TECH_NODES.map((t) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: t.delay },
            scale: { duration: 0.4, delay: t.delay },
            y: { duration: 5 + t.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: t.x, top: t.y }}
          className="absolute"
        >
          <div className="glass rounded-full px-2.5 py-1 text-[10px] font-medium text-white/80 shadow-lg sm:px-3 sm:py-1.5 sm:text-[11px]">
            {t.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
});
