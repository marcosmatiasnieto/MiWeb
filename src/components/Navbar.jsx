import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo + Marca */}
                <a href="#" className="flex items-center gap-3 hover:opacity-90 transition">
                    <img
                        src="/favicon.png"
                        alt="Logo Marcos Nieto"
                        className="w-10 h-10 rounded-full object-cover border border-sky-400/30 shadow-sm"
                    />
                    <h2 className="text-xl font-bold text-sky-400">Backend Developer</h2>
                </a>

                {/* Menú para Computadora */}
                <nav className="desktop-menu flex gap-6 text-sm font-medium text-slate-300">
                    <a href="#about" className="hover:text-sky-400 transition">Sobre mí</a>
                    <a href="#skills" className="hover:text-sky-400 transition">Habilidades</a>
                    <a href="#proyectos" className="hover:text-sky-400 transition">Proyectos</a>
                    <a href="#contacto" className="hover:text-sky-400 transition">Contacto</a>
                </nav>

                {/* Botón Hamburguesa para Móvil */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mobile-btn text-slate-300 hover:text-white p-1 focus:outline-none"
                    aria-label="Abrir menú"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Reglas CSS directas para ocultar/mostrar según la pantalla */}
            <style>{`
                @media (max-width: 639px) {
                    .desktop-menu { display: none !important; }
                    .mobile-btn { display: block !important; }
                }
                @media (min-width: 640px) {
                    .desktop-menu { display: flex !important; }
                    .mobile-btn { display: none !important; }
                }
            `}</style>

            {/* Menú desplegable Móvil */}
            {isOpen && (
                <nav className="bg-slate-900/95 border-t border-slate-800/80 px-6 py-4 flex flex-col gap-4 text-slate-300 text-sm font-medium">
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition py-1">Sobre mí</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition py-1">Habilidades</a>
                    <a href="#proyectos" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition py-1">Proyectos</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition py-1">Contacto</a>
                </nav>
            )}
        </header>
    );
}