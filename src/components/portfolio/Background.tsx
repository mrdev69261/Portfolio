import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useEffect } from "react";

const canUsePointerParallax = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches;

export const AmbientBackground = memo(function AmbientBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 28 });
  const sy = useSpring(my, { stiffness: 60, damping: 28 });

  useEffect(() => {
    if (!canUsePointerParallax()) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 24;
        const y = (e.clientY / window.innerHeight - 0.5) * 24;
        mx.set(x);
        my.set(y);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [mx, my]);

  const t1x = useTransform(sx, (v) => `${v}px`);
  const t1y = useTransform(sy, (v) => `${v}px`);
  const t2x = useTransform(sx, (v) => `${-v}px`);
  const t2y = useTransform(sy, (v) => `${-v}px`);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-45" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <motion.div
        style={{ x: t1x, y: t1y }}
        className="animate-blob absolute -left-36 -top-36 h-[34rem] w-[34rem] rounded-full opacity-30 blur-2xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,.5), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: t2x, y: t2y }}
        className="animate-blob absolute top-1/3 -right-36 h-[30rem] w-[30rem] rounded-full opacity-24 blur-2xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,.38), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: t1x, y: t2y }}
        className="animate-blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full opacity-18 blur-2xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,.38), transparent 60%)" }}
        />
      </motion.div>
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
});

export function ScrollProgress() {
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        background: "linear-gradient(90deg,#8B5CF6,#5EEAD4)",
        scaleX: 0,
      }}
      whileInView={{}}
      id="scroll-progress"
    />
  );
}
