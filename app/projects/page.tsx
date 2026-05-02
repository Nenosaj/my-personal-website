import Link from 'next/link';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl lg:text-7xl font-black mb-12 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span> 💼
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="group p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 line-clamp-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}