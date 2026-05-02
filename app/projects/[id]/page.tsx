import projects from '@/data/projects.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// 1. Tell Next.js to pre-build all project pages at compile time for maximum speed
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// 2. The Dynamic Page Component
export default async function ProjectDetails({ params }: { params: { id: string } }) {
  // Await the params (Required in Next.js 15+ App Router)
  const { id } = await params;
  
  // Find the exact project from your JSON data
  const project = projects.find((p) => p.id === id);

  // If the user types a bad URL (e.g., /projects/fake), show a 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-slate-400 hover:text-white mb-8 inline-flex items-center gap-2 transition-colors">
          &larr; Back to Projects
        </Link>

        {/* Header */}
        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
          {project.emoji} {project.title}
        </h1>
        
        <div className={`h-2 w-32 rounded-full bg-gradient-to-r ${project.gradient} mb-12`}></div>
        
        <div className="space-y-12">
          {/* Main Description */}
          <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>

          {/* Grid for Tech Stack and Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-700/50 text-slate-200 border border-slate-600/50 rounded-xl text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-slate-300 flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          {project.liveUrl && (
            <div className="pt-4">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity shadow-lg`}
              >
                {project.liveLabel || "View Live Project"}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}