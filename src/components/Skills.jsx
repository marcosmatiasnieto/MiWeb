export function Skills() {
    const categories = [
        {
            title: "Backend",
            skills: ["Java", "Spring Boot", "Laravel", "PHP"]
        },
        {
            title: "Base de Datos",
            skills: ["MySQL", "SQL"]
        },
        {
            title: "Frontend",
            skills: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"]
        },
        {
            title: "Herramientas",
            skills: ["Git", "GitHub", "Vercel", "Trello", "Notion"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white text-center mb-12">
                Habilidades Tecnológicas
            </h2>

            <div className="skills-grid">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/40 transition duration-300"
                    >
                        <h3 className="text-xl font-bold text-sky-400 mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="bg-slate-800/80 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-700/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Estilos asegurados para 2 columnas en compu y 1 en celu */}
            <style>{`
                .skills-grid {
                    display: grid;
                    gap: 1.5rem;
                }
                @media (min-width: 640px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
            `}</style>
        </section>
    );
}