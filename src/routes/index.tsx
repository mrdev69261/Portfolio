import { motion, useScroll, useSpring } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

const About = lazy(() =>
  import("@/components/portfolio/About").then((m) => ({ default: m.About })),
);
const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({ default: m.Experience })),
);
const Skills = lazy(() =>
  import("@/components/portfolio/Skills").then((m) => ({ default: m.Skills })),
);
// const Testimonials = lazy(() =>
//   import("@/components/portfolio/Testimonials").then((m) => ({ default: m.Testimonials })),
// );
const Certificates = lazy(() =>
  import("@/components/portfolio/Certificates").then((m) => ({ default: m.Certificates })),
);
const Contact = lazy(() =>
  import("@/components/portfolio/Contact").then((m) => ({ default: m.Contact })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devender Kumar - MERN Full Stack Developer" },
      {
        name: "description",
        content:
          "Devender Kumar - MERN full-stack engineer building scalable, AI-first web applications. Selected work, experience, and contact.",
      },
      { property: "og:title", content: "Devender Kumar - MERN Full Stack Developer" },
      {
        property: "og:description",
        content: "Scalable web applications with AI-first experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 350);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: loaded ? "none" : "auto" }}
        className="fixed inset-0 z-[100] grid place-items-center bg-[#1a1a1a]"
        aria-hidden={loaded}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            initializing
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "0% 50%",
          background: "linear-gradient(90deg,#8B5CF6,#5EEAD4)",
        }}
        className="fixed left-0 right-0 top-0 z-[70] h-[2px]"
      />

      <AmbientBackground />
      <Navbar />

      <main className="relative">
        <Hero />
        <TechMarquee />
        <Projects />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Skills />
          {/* <Testimonials /> */}
          <Certificates />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
