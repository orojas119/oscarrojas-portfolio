import type { Metadata } from "next";
import Link from "next/link";
import { Montserrat, Bebas_Neue } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILS Dev Projects · Oscar Rojas",
  description:
    "15 internal tools built for Immaculata-La Salle High School, with before/after impact and an estimated annual cost saved for each.",
};

export default function IlsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`ils-theme ${montserrat.variable} ${bebasNeue.variable} min-h-screen bg-cream text-charcoal`}
    >
      <header
        className="w-full border-b sticky top-0 z-40 backdrop-blur-sm"
        style={{ borderColor: "rgba(14,42,24,0.12)", background: "rgba(252,250,243,0.9)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/ils"
            className="font-display text-xl sm:text-2xl tracking-wide uppercase"
            style={{ color: "#004B23" }}
          >
            ILS Dev Projects
          </Link>
          <Link
            href="/projects"
            className="text-[10px] tracking-[0.3em] uppercase text-charcoal/50 hover:text-charcoal transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
