export function Hero() {
    return (
        <section id="about" className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                ¡Hola! Soy <span className="text-sky-400">Desarrollador Web</span>
            </h1>
            <p className="max-w-2xl text-slate-400 text-lg mb-8">
                Apasionado por la tecnología y el desarrollo de software. Construyo aplicaciones web modernas con React, JavaScript y tecnologías backend.
            </p>
            <div className="flex gap-4">
                <a href="#proyectos" className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-sky-500/20">
                    Ver mis proyectos
                </a>
                <a href="#contacto" className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3 rounded-lg transition">
                    Contactame
                </a>
            </div>
        </section>
    );
}