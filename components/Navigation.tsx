'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Code, Pen, Map, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { path: "/", label: "Home", icon: Home, emoji: "👋" },
  { path: "/about", label: "About", icon: User, emoji: "🚀" },
  { path: "/projects", label: "Projects", icon: Briefcase, emoji: "💼" },
  { path: "/skills", label: "Skills", icon: Code, emoji: "⚡" },
  { path: "/writing", label: "Writing", icon: Pen, emoji: "✍️" },
  { path: "/journey", label: "Journey", icon: Map, emoji: "🗺️" },
  { path: "/contact", label: "Contact", icon: Mail, emoji: "📬" },
];

/**
 * Shared Branding Component
 * Ensures the Latte Logo and "Architect" title are consistent[cite: 3]
 */
function Brand({ size = 42 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Logo size={size} className="group-hover:rotate-12 transition-transform duration-500 ease-out" />
      <div className="flex flex-col text-left">
        <span className="text-white font-black tracking-tighter leading-none text-xl uppercase">
          Jason
        </span>
        <span className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">
          Architect
        </span>
      </div>
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- DESKTOP BRANDING (Top Left) --- */}
      <div className="hidden lg:block fixed top-8 left-8 z-50">
        <Brand />
      </div>

      {/* --- DESKTOP SIDEBAR NAVIGATION (Right) --- */}
      <nav className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-8 z-50">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 rounded-[2.5rem] p-3 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40"
                        : "bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent hover:border-slate-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
                    <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl whitespace-nowrap shadow-2xl">
                      <span className="text-white font-bold text-xs uppercase tracking-widest">
                        {item.emoji} {item.label}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION --- */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/50">
        <div className="flex items-center justify-between p-4">
          <Brand size={36} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-[1.5rem] font-bold transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                          : "text-slate-400 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      <span className="text-xl">{item.emoji}</span>
                      <span className="tracking-tight">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}