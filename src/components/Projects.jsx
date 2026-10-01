import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <section id="proyectos" className="py-20 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Mis Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}