'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Code } from "lucide-react";

import site from "@/data/site.json";
import stats from "@/data/stats.json";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                Available for cool projects
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
                <span className="block text-white">Hey! I'm</span>

                {/* NAME FROM JSON */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                  {site.name.split(" ")[0]}
                </span>

                {/* TITLE FROM JSON */}
                <span className="block text-white text-5xl lg:text-6xl">
                  {site.title}
                </span>
              </h1>
            </motion.div>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl lg:text-2xl text-slate-400 mb-8 leading-relaxed max-w-2xl"
            >
              {site.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href={site.cta.primary.href}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold overflow-hidden shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  {site.cta.primary.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href={site.cta.secondary.href}
                className="px-8 py-4 bg-slate-800 border-2 border-slate-700 text-white rounded-2xl font-bold hover:border-blue-500 hover:bg-slate-800/80 transition-all"
              >
                {site.cta.secondary.label}
              </Link>
            </motion.div>

            {/* STATS (FROM JSON) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">

                  {/* ICON SWITCH (simple logic) */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center">
                    {i === 0 && <Code className="w-6 h-6 text-blue-400" />}
                    {i === 1 && <Zap className="w-6 h-6 text-purple-400" />}
                    {i >= 2 && <span className="text-xl">🔥</span>}
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">

              {/* Floating cards (same as yours) */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/50"
              >
                <div className="text-4xl mb-2">💻</div>
                <div className="text-white font-bold">Clean Code</div>
                <div className="text-blue-100 text-sm">Always</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-2xl shadow-purple-500/50"
              >
                <div className="text-4xl mb-2">🎨</div>
                <div className="text-white font-bold">Design First</div>
                <div className="text-purple-100 text-sm">User-Focused</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-2xl shadow-orange-500/50 z-10"
              >
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-white font-bold">Fast</div>
                <div className="text-orange-100 text-sm">Performance</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Home;