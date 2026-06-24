"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/Oscar_Rojas_Resume.pdf", label: "Resume ↗", external: true },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-charcoal flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-1 sm:gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.65, ease: EASE }}
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block text-[14vw] sm:text-[10vw] md:text-8xl font-black uppercase text-cream hover:text-yellow transition-colors tracking-tighter leading-none py-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-[14vw] sm:text-[10vw] md:text-8xl font-black uppercase text-cream hover:text-yellow transition-colors tracking-tighter leading-none py-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Bottom bar */}
            <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30">
                © {new Date().getFullYear()} Oscar Rojas
              </span>
              <div className="flex items-center gap-6">
                <a
                  href="mailto:rojaso125@gmail.com"
                  className="text-[10px] tracking-[0.3em] uppercase text-cream/40 hover:text-cream transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/orojas119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.3em] uppercase text-cream/40 hover:text-cream transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/oscarrojas119/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.3em] uppercase text-cream/40 hover:text-cream transition-colors"
                >
                  LinkedIn
                </a>
                <div className="border-l border-cream/20 pl-6">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pill — always on top */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-[60] pointer-events-none">
        <motion.button
          onClick={() => setOpen((v) => !v)}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7, ease: EASE }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{
            pointerEvents: "auto",
            boxShadow: open
              ? "0 8px 32px rgba(26,26,26,0.25)"
              : "0 8px 32px rgba(255,222,77,0.45)",
          }}
          className={`flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200 ${
            open
              ? "bg-cream text-charcoal"
              : "bg-yellow text-charcoal"
          }`}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="text-xl font-black leading-none inline-block"
          >
            {open ? "×" : "≡"}
          </motion.span>
          {open ? "CLOSE" : "MENU"}
        </motion.button>
      </div>
    </>
  );
}
