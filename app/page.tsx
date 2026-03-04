'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Code } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Available for cool projects</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
                <span className="block text-white">Hey! I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                  Jason
                </span>
                <span className="block text-white text-5xl lg:text-6xl">Building Cool Stuff</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl lg:text-2xl text-slate-400 mb-8 leading-relaxed max-w-2xl"
            >
              Developer by day, problem solver by night. I turn coffee into code 
              and ideas into reality ☕️✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold overflow-hidden shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  See My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800 border-2 border-slate-700 text-white rounded-2xl font-bold hover:border-blue-500 hover:bg-slate-800/80 transition-all"
              >
                Let's Talk 💬
              </Link>
            </motion.div>

            {/* Fun stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-slate-500">Projects Shipped</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-slate-500">Cups of Coffee</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Floating card 1 */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/50"
              >
                <div className="text-4xl mb-2">💻</div>
                <div className="text-white font-bold">Clean Code</div>
                <div className="text-blue-100 text-sm">Always</div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-2xl shadow-purple-500/50"
              >
                <div className="text-4xl mb-2">🎨</div>
                <div className="text-white font-bold">Design First</div>
                <div className="text-purple-100 text-sm">User-Focused</div>
              </motion.div>

              {/* Floating card 3 */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-2xl shadow-orange-500/50 z-10"
              >
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-white font-bold">Fast & Furious</div>
                <div className="text-orange-100 text-sm">Performance</div>
              </motion.div>

              {/* Orbiting dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 200 + i * 20,
                    height: 200 + i * 20,
                    marginLeft: -(100 + i * 10),
                    marginTop: -(100 + i * 10),
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500 text-sm"
        >
        </motion.div>
      </motion.div>
    </div>
  );
}


export default Home;
