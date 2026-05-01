'use client';

import { motion } from "framer-motion";
import about from "@/data/about.json";
import stats from "@/data/stats.json";
import Link from "next/link";

function About() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <span className="text-sm text-blue-300 font-medium">
              The Engineer Behind the Systems
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">About</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Me 👋
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl">
              <p className="text-slate-300 text-xl mb-4">
                {about.intro}
              </p>

              {about.story.map((p, i) => (
                <p key={i} className="text-slate-400 mb-4">
                  {p}
                </p>
              ))}
            </div>

            {/* INTERESTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.interests.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`p-6 bg-gradient-to-br ${item.color} rounded-3xl text-center`}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-white font-bold">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* FACTS */}
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                🎯 Key Traits
              </h3>

              <div className="space-y-4">
                {about.facts.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="text-white font-semibold">{f.title}</div>
                      <div className="text-slate-400">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            {/* REAL STATS */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-3xl">
              <h3 className="text-sm text-slate-400 mb-6 uppercase">
                By The Numbers
              </h3>

              <div className="space-y-6">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-blue-400">
                      {s.value}
                    </div>
                    <div className="text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* STATUS */}
            {about.status.available && (
              <div className="p-8 bg-green-500/20 border border-green-400/30 rounded-3xl">
                <div className="text-green-300 font-bold mb-2">
                  Available
                </div>
                <p className="text-slate-300 mb-4">
                  {about.status.message}
                </p>

                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-green-500 text-white rounded-xl font-bold"
                >
                  Contact Me
                </Link>
              </div>
            )}

            {/* TOOLKIT */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-3xl">
              <h3 className="text-white font-bold mb-4">
                🛠️ Toolkit
              </h3>

              <div className="flex flex-wrap gap-2">
                {about.toolkit.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700 text-sm rounded-xl"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default About;