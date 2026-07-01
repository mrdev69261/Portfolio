import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <div className="container-page">
        <div
          className={`flex min-h-[56px] items-center justify-between gap-3 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4 sm:py-3 ${
            scrolled
              ? "glass-strong shadow-[0_8px_32px_-16px_rgba(0,0,0,.55)]"
              : "border border-transparent"
          }`}
        >
          <a
            href="#home"
            className="flex min-h-11 min-w-0 items-center gap-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4]"
            aria-label="Go to home"
          >
            {/* <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#cfbdf9] to-[#b1f5eb]">
              <span className="font-display text-sm font-bold text-black">CK</span>
            </div> */}
            <span className="font-display truncate text-sm font-medium tracking-tight text-white/90">
              Codes<span className="text-white/40">karo</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <nav
            className="hidden items-center gap-0.5 md:flex lg:hidden"
            aria-label="Compact navigation"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-2.5 py-3 text-xs text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
              aria-label="Mobile navigation"
            >
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.025 }}
                  className="block min-h-[48px] rounded-xl px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EEAD4]"
                >
                  {n.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
