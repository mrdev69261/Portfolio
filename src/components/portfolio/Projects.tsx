import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useCallback, useRef, useState } from "react";
import { ArrowUpRight, Cpu, ExternalLink, Github, Layers, Sparkles, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  challenges: string;
  architecture: string;
  accent: [string, string];
  glyph: string;
  banner?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Air Sea Cargo Express",
    tagline: "Efficiency in motion, trust in every mile",
    description:
      "AirSea Cargo Express is a global logistics and freight forwarding company specializing in international shipping, customs clearance, and door-to-door delivery.",
    features: [
      "Multimodal Freight Forwarding",
      "Door-to-Door Delivery",
      "Customs Brokerage & Clearance",
      "Specialized Cargo Handling",
    ],
    tech: ["React.js", "Node", "Tailwind"],
    challenges:
      "Designing a deterministic replay engine over non-deterministic LLM calls while keeping latency under 800 ms.",
    architecture:
      "Event-sourced reasoning graph stored in Mongo with snapshotting in Redis. Agent runtime executes nodes via a typed function-call protocol over WebSockets.",
    accent: ["#8B5CF6", "#5EEAD4"],
    glyph: "ASCE",
    banner:
      "https://res.cloudinary.com/dz32grx18/image/upload/v1782894269/airsea-logo.png.asset_opbwit.png",
    demo: "https://airseacargoexpress.ae/",
  },
  {
    title: "Tail Empire",
    tagline: "PET MARKETPLACE PLATFORM",
    description:
      "A modern pet discovery platform that connects pet lovers with verified breeders through an intuitive browsing experience, advanced search filters and a trusted enquiry workflow.",
    features: [
      "Verified breeder profiles & pet listings",
      "Advanced breed search and filtering",
      "Detailed pet information page",
      "Secure enquiry & contact workflow",
    ],
    tech: ["React", "Express", "Mongo", "Tailwind"],
    challenges:
      "Designing a trustworthy marketplace experience by organizing large pet listings, implementing intuitive breed discovery, responsive layouts and fast page performance while maintaining a premium user experience.",
    architecture:
      "Built with a scalable MERN architecture featuring reusable React components, RESTful APIs, responsive UI, dynamic pet listings and optimized performance across all devices.",
    accent: ["#5EEAD4", "#8B5CF6"],
    glyph: "SM",
    banner:
      "https://res.cloudinary.com/dz32grx18/image/upload/v1782894273/tail-empire-logo.png.asset_kujr9u.png",
    demo: "https://tailempire.in/",
  },
  {
    title: "Bihar Wedding Photography (Working)",
    tagline: "WEDDING PHOTOGRAPHY PLATFORM",
    description:
      "A premium wedding photography website designed to showcase cinematic storytelling, curated portfolios and seamless client enquiries through an elegant, high-performance digital experience.",
    features: [
      "Cinematic portfolio & gallery showcase",
      "Category-based wedding collections",
      "Client enquiry & booking workflow",
      "Fully responsive across all devices",
    ],
    tech: ["React", "Node", "Express", "Mongo", "Cloudinary"],
    challenges:
      "Creating a visually rich experience while maintaining fast loading speeds, optimizing high-resolution galleries and ensuring smooth performance across desktop and mobile devices.",
    architecture:
      "Modern React architecture with reusable UI components, optimized media delivery, responsive layouts and SEO-focused page structure for a fast, immersive browsing experience.",
    accent: ["#8B5CF6", "#a78bfa"],
    glyph: "BWP",
    banner: "https://res.cloudinary.com/dz32grx18/image/upload/v1782894278/biharwedding.png",
    demo: "https://sunny-medley-08147155.figma.site/",
  },
  {
    title: "Creative Vision Films (Working)",
    tagline: "LUXURY WEDDING FILMMAKING & PHOTOGRAPHY",
    description:
      "A luxury wedding photography and filmmaking platform designed to showcase cinematic love stories, editorial bridal portraits and premium wedding experiences through immersive visuals and seamless client engagement.",
    features: [
      "Cinematic wedding film showcase",
      "Editorial bridal & couple galleries",
      "Interactive portfolio with category filtering",
      "Optimized image & video loading",
    ],
    tech: ["React", "Node", "Tailwind", "Cloudinary", "MongoDB"],
    challenges:
      "Delivering a visually immersive experience while optimizing high-resolution media, maintaining fast page performance and preserving the luxury feel across every device.",
    architecture:
      "Modern React architecture with reusable components, optimized image & video delivery, responsive layouts, smooth animations and SEO-focused performance for a premium digital experience.",
    accent: ["#5EEAD4", "#22d3ee"],
    glyph: "CVF",
    banner:
      "https://res.cloudinary.com/dz32grx18/image/upload/v1782894271/creative.png.asset_wyuvyf.png",
    demo: "#",
  },
];

const canUseDesktopPointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches;

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActive(null), []);

  return (
    <section id="projects" className="section-y relative">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title={
              <>
                Products engineered with <span className="gradient-text">precision</span>.
              </>
            }
            description="A selection of products I've shipped - each built end-to-end with a focus on architecture, interface and intelligence."
          />
          <a
            href="#"
            className="min-h-11 rounded-full px-2 py-3 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4] sm:text-xs"
          >
            View archive
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:gap-4 lg:grid-cols-3 2xl:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
}

const TiltCard = memo(function TiltCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 160, damping: 22 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 160, damping: 22 });

  const handleMove = (e: React.MouseEvent) => {
    if (!canUseDesktopPointer()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.12) }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full cursor-pointer focus-visible:outline-none"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} project details`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
      >
        <div
          className="h-full rounded-2xl p-px transition-all duration-300 group-hover:shadow-[0_18px_44px_-22px_rgba(139,92,246,.42)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#5EEAD4]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.02) 40%, rgba(255,255,255,.02) 60%, rgba(139,92,246,.35))",
          }}
        >
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#252525]">
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-lg:hidden"
              style={{
                background:
                  "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,.14), transparent 52%)",
              }}
            />
            <div className="relative rounded-t-2xl aspect-[5/3] sm:aspect-[16/9] lg:aspect-[16/8] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${project.accent[0]}33, transparent 50%), radial-gradient(circle at 70% 70%, ${project.accent[1]}33, transparent 55%), #1f1f1f`,
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative grid h-full place-items-center">
                {project.banner ? (
                  <div className="flex h-full w-full items-center justify-center bg-[#c5c5c5] p-2 sm:p-3 lg:p-4">
                    <img
                      src={project.banner}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className="font-display text-3xl font-bold tracking-tighter min-[480px]:text-4xl md:text-5xl lg:text-6xl"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {project.glyph}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3 sm:p-3.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-display truncate text-sm font-semibold text-white sm:text-[15px]">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 truncate text-[11px] text-white/50 sm:text-xs">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>

              <p className="line-clamp-2 text-[11px] leading-relaxed text-white/55 sm:text-xs">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-end overflow-y-auto bg-black/70 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl sm:max-h-[85vh] sm:rounded-3xl"
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4] sm:right-4 sm:top-4"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative rounded-t-2xl aspect-[5/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[16/8]">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${project.accent[0]}44, transparent 50%), radial-gradient(circle at 70% 70%, ${project.accent[1]}44, transparent 55%), #1f1f1f`,
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid h-full place-items-center">
            {project.banner ? (
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] p-2 sm:p-3 lg:p-4">
                <img
                  src={project.banner}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div
                className="font-display font-bold tracking-tighter"
                style={{
                  fontSize: "clamp(4rem, 14vw, 8rem)",
                  background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {project.glyph}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-6 p-5 sm:space-y-8 sm:p-8 md:p-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#5EEAD4]/80 sm:text-xs">
              {project.tagline}
            </div>
            <h3
              id="project-modal-title"
              className="font-display fs-h2 mt-2 font-semibold text-white"
            >
              {project.title}
            </h3>
            <p className="fs-body mt-3 max-w-2xl text-white/60 sm:mt-4">{project.description}</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <InfoBlock icon={<Layers className="h-4 w-4" />} title="Architecture">
              {project.architecture}
            </InfoBlock>
            <InfoBlock icon={<Cpu className="h-4 w-4" />} title="Challenges">
              {project.challenges}
            </InfoBlock>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/40 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Key Features
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5EEAD4]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:flex-wrap sm:pt-6">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_10px_30px_-14px_rgba(139,92,246,.55)]"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            ) : (
              <span className="btn-base cursor-not-allowed border border-white/10 bg-white/[0.03] text-white/40">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </span>
            )}
            {/* <a
              href="#"
              className="btn-base border border-white/10 bg-white/[0.03] text-white/85 hover:bg-white/[0.06]"
            >
              <Github className="h-4 w-4" /> Source
            </a> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-[#5EEAD4]">
        {icon}
        <span className="font-mono text-[11px] uppercase tracking-widest sm:text-xs">{title}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{children}</p>
    </div>
  );
}
