"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IlsTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ clipPath: "circle(150% at 50% 0%)" }}
        animate={{ clipPath: "circle(0% at 50% 0%)" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #FFDE4D 0%, #FFC20E 45%, #004B23 100%)",
        }}
      />
      {children}
    </>
  );
}
