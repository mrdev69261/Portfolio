import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

const canUseMagneticHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches;

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 24 });
  const sy = useSpring(y, { stiffness: 260, damping: 24 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !canUseMagneticHover()) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * 0.14);
        y.set(dy * 0.14);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  const styles =
    variant === "primary"
      ? "text-white shadow-[0_10px_30px_-14px_rgba(139,92,246,.55)] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:brightness-110"
      : "glass text-white/90 hover:text-white hover:bg-white/[0.04]";

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      className={`btn-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4] ${styles} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
