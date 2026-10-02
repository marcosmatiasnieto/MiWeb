export function Contact() {
    return (
        <footer id="contacto" className="pt-12 pb-8 max-w-4xl mx-auto px-6 text-center border-t border-slate-800/60 mt-12">
            <h2 className="text-2xl font-bold text-white mb-2">¿Trabajamos juntos?</h2>
            <p className="text-slate-400 mb-6 text-sm max-w-md mx-auto">
                Estoy disponible para propuestas laborales, proyectos freelance o simplemente para conectar.
            </p>

            {/* Botones / Tarjetas de contacto */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                    href="https://github.com/marcosmatiasnieto"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 px-5 py-2.5 rounded-xl border border-slate-700/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm font-medium"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/nieto-marcos-matias"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-sky-400 px-5 py-2.5 rounded-xl border border-slate-700/50 transition-all hover:-translate-y-0.5 shadow-sm text-sm font-medium"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:marcosnieto2293@gmail.com"
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md shadow-sky-500/20 text-sm font-medium"
                >
                    Enviar Email
                </a>
            </div>

            {/* Pie de página compacto */}
            <div className="pt-6 border-t border-slate-800/40 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p>© 2026 Marcos Matias Nieto</p>
                <p className="flex items-center gap-1">
                    Desarrollado con React, Tailwind CSS & Vercel
                </p>
            </div>
        </footer>
    );
}