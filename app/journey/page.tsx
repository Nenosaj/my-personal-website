'use client';

import { motion } from "framer-motion";
import { Construction, Terminal, GraduationCap, Zap } from "lucide-react";
import journeyData from "@/data/journey.json";

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated System Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-24 h-24 bg-blue-500/10 border border-blue-500/30 rounded-[2.5rem] mb-10 shadow-2xl shadow-blue-500/20"
        >
          <Construction className="w-12 h-12 text-blue-400" />
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Zap className="w-3 h-3 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-300">System Initialization</span>
          </div>

          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">
            {journeyData.headline.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              {journeyData.headline.split(' ')[1]}
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            {journeyData.subheadline}
          </p>
        </motion.div>

        {/* Dynamic Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {journeyData.metadata.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-3xl text-left group hover:border-slate-700/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.type === 'terminal' ? (
                  <Terminal className="w-5 h-5 text-blue-400" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                )}
                <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">
                  {item.label}
                </span>
              </div>
              <p className="text-white font-bold text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Logic */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="flex justify-between items-end mb-3 px-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Compiling Experience</span>
            <span className="text-sm font-mono text-blue-400">{journeyData.progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-[2px] border border-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${journeyData.progress}%` }}
              transition={{ duration: 2, ease: "circOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
            />
          </div>
          <p className="mt-4 text-[10px] text-slate-600 font-medium uppercase tracking-[0.3em]">
            Deployment Scheduled: {journeyData.targetDate}
          </p>
        </motion.div>
      </div>
    </div>
  );
}