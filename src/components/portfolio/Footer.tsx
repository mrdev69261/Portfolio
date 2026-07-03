import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8 sm:py-10">
      <div className="container-page">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left">
          <div className="flex min-w-0 items-center gap-3">
            {/* <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#5EEAD4] font-display text-sm font-bold text-black">
              DK
            </div> */}
            <div className="min-w-0">
              <div className="truncate font-display text-sm font-medium text-white">
                Devender Kumar
              </div>
              <div className="truncate text-xs text-white/40">MERN - AI - Full-Stack</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/40">
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
          </div>

          <div className="max-w-full font-mono text-[10px] text-white/40 sm:text-[11px]">
            (c) {new Date().getFullYear()} codeskaro
          </div>
        </div>
      </div>
    </footer>
  );
}
