'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  gradient: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  liveLabel?: string; // New field for custom button text
  githubUrl?: string;
  imageQuery: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = projectsData as Project[];

  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <span className="text-sm text-blue-300 font-medium">Things I've Built</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">My</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Projects 🚀
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A showcase of my work in full-stack development, IoT, and network infrastructure.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-slate-600 transition-all overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">{project.emoji}</div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-blue-400 font-semibold mb-3 text-sm">
                    {project.category}
                  </div>
                  <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm group-hover:gap-3 transition-all">
                    <span>{project.liveLabel || "View Project"}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
            >
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors border border-slate-700"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  <div className="relative h-64 md:h-96 bg-slate-800 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`}></div>
                    <img
                      src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600`} // Updated fallback logic
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-6xl">{selectedProject.emoji}</div>
                      <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        <div className="text-blue-400 font-bold text-lg">
                          {selectedProject.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>{selectedProject.liveLabel || "View Live"}</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-2xl font-bold hover:border-slate-600 transition-all"
                        >
                          <Github className="w-5 h-5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">📖 About This Project</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">✨ Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
                          >
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white mb-4">🛠️ Tech Stack</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-bold shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;