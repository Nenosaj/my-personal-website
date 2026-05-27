'use client';

import { motion } from "framer-motion";
import { BookOpen, Zap, ArrowRight } from "lucide-react";
import writingData from "@/data/writing.json";

function Writing() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-300">Architectural Narratives</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">The</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Dev Log ✍️
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {writingData.intro}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {writingData.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-[2.5rem] hover:border-slate-700/50 transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.emoji}
              </div>
              <div className={`text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                {category.label}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{category.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap / Upcoming Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative bg-slate-900/40 border border-slate-800/50 rounded-[3rem] p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px]" />
          
          <div className="relative flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-4">Pipeline Status: {writingData.status}</h2>
              <p className="text-slate-400 mb-8 max-w-md">
                I&apos;m currently compiling my first set of technical post-mortems and personal reflections. 
                Expect the initial deployment shortly.
              </p>
              
              <div className="space-y-4">
                {writingData.upcomingTopics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <Zap className="w-3 h-3 text-blue-400" /> {topic}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-64">
               <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                 <span>Drafting Progress</span>
                 <span>{writingData.progress}%</span>
               </div>
               <div className="h-2 w-full bg-slate-950 rounded-full p-[2px] border border-slate-800">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${writingData.progress}%` }}
                   transition={{ duration: 1.5, ease: "circOut" }}
                   className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                 />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-[2.5rem] text-center"
        >
          <h3 className="text-xl font-black text-white mb-2">Have a topic in mind?</h3>
          <p className="text-slate-400 mb-6">If you want to see a deep-dive on a specific system or technology, reach out.</p>
          <a
            href="mailto:daohogjason1@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-sm hover:bg-blue-400 transition-all group"
          >
            Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Writing;