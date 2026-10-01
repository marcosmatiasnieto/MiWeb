export function Skills() {
    const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Laravel", "PHP", "MySQL", "Git & GitHub", "Vercel"];

    return (
        <section id="skills" className="py-10 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Habilidades Tecnológicas</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-slate-800 text-sky-300 border border-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:border-sky-500 transition">
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
}