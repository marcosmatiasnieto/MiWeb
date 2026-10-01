export function ProjectCard({ project }) {
    return (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl overflow-hidden hover:border-sky-500/50 transition flex flex-col">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
              {tag}
            </span>
                    ))}
                </div>

                <div className="flex gap-4 text-sm font-medium">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                            Ver Demo →
                        </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                        Código en GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}