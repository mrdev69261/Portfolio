import { motion } from "framer-motion";
import { useId, useState } from "react";
import { Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-y relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text">remarkable</span>.
            </>
          }
          description="I'm open to senior full-stack and AI engineering roles, freelance product work, and interesting collaborations."
        />

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="glass-strong rounded-3xl p-5 sm:p-6 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#5EEAD4]/80 sm:text-xs">
              Reach out
            </div>
            <h3 className="font-display fs-h3 mt-3 font-semibold text-white">
              The fastest way to reach me.
            </h3>
            <p className="mt-3 text-sm text-white/55">
              Drop a line - I usually reply within a day.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value="devenderkumar68667@gmail.com"
                href="mailto:devenderkumar68667@gmail.com"
              />
              <ContactRow
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="devender-webdev"
                href="https://www.linkedin.com/in/devender-webdev"
              />
              <ContactRow
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value="mrdev69261"
                href="https://github.com/mrdev69261"
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Delhi, India - Remote worldwide"
                href="https://maps.app.goo.gl/aQ4DRzkkTC74p4RW7"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.setTimeout(() => setSent(false), 3500);
            }}
            className="glass-strong relative min-w-0 rounded-3xl p-5 sm:p-6 md:p-8"
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#5EEAD4]/80 sm:text-xs">
              Send a message
            </div>
            <h3 className="font-display fs-h3 mt-3 font-semibold text-white">
              Tell me about your project.
            </h3>

            <div className="mt-5 grid gap-4 sm:mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" placeholder="Jane Doe" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                />
              </div>
              <Field label="Subject" name="subject" placeholder="Quick collab on an AI product" />
              <Field
                label="Message"
                name="message"
                textarea
                placeholder="A few lines about what you're building..."
              />
            </div>

            <div className="mt-6">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="group btn-base relative w-full overflow-hidden bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_10px_30px_-14px_rgba(139,92,246,.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4] sm:w-auto"
                type="submit"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Sent
                    </>
                  ) : (
                    <>
                      Send Message{" "}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[56px] min-w-0 items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all hover:border-white/15 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4]"
      aria-label={`${label}: ${value}`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-[#5EEAD4] group-hover:bg-white/[0.08]">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{label}</div>
        <div className="truncate text-sm text-white/85">{value}</div>
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  textarea,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  const fieldId = `${name}-${id}`;
  const cls =
    "mt-2 w-full min-h-[48px] rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-base text-white placeholder-white/30 outline-none transition-colors focus:border-[#8B5CF6]/60 focus:bg-white/[0.04] sm:text-sm";

  return (
    <label className="block min-w-0" htmlFor={fieldId}>
      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{label}</span>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows={5}
          placeholder={placeholder}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}
