export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-sky-400">Mi Portfolio</h2>
                <nav className="flex gap-6 text-sm font-medium text-slate-300">
                    <a href="#about" className="hover:text-sky-400 transition">Sobre mí</a>
                    <a href="#skills" className="hover:text-sky-400 transition">Habilidades</a>
                    <a href="#proyectos" className="hover:text-sky-400 transition">Proyectos</a>
                    <a href="#contacto" className="hover:text-sky-400 transition">Contacto</a>
                </nav>
            </div>
        </header>
    );
}