'use client';

import { motion } from "framer-motion";
import skillGroups from "@/data/skills.json";

function Skills() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <span className="text-sm text-blue-300 font-medium">
              💪 The Engineering Toolkit
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">My</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Skills ⚡
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl">
            Real technologies I use to architect production systems — from cloud infrastructure and enterprise networks to full-stack applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + groupIndex * 0.1 }}
              className="relative group"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-10 blur-2xl rounded-3xl`} />

              {/* Card Content */}
              <div className="relative h-full p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-slate-600 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl">{group.emoji}</div>
                  <h2 className="text-2xl font-black text-white">
                    {group.category}
                  </h2>
                </div>

                {/* Skill Pills / Tags instead of Progress Bars */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + groupIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border border-slate-700/50 hover:border-slate-500 rounded-xl transition-colors cursor-default"
                    >
                      <span className="text-xl">{skill.emoji}</span>
                      <span className="text-slate-200 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;