"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 dark:border-stone-800 bg-[#f7f1ed]/90 dark:bg-stone-900/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-stone-900 dark:text-[#f7f1ed] hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          Oscar Rojas
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-stone-900 dark:text-[#f7f1ed] bg-stone-200 dark:bg-stone-800"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-[#f7f1ed] hover:bg-stone-200/60 dark:hover:bg-stone-800/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
