export function Hero() {
    return (
        // Aumentamos el padding vertical a py-24 sm:py-28 y le agregamos un min-h-[60vh] para que quede centrado verticalmente
        <section className="py-24 sm:py-28 px-6 max-w-5xl mx-auto flex items-center justify-between gap-10 flex-wrap sm:flex-nowrap min-h-[60vh]">

            {/* Texto a la izquierda */}
            <div className="text-center sm:text-left sm:w-2/3 flex-grow min-w-[300px]">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                    👋 ¡Hola! Soy Marcos Nieto
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                    Desarrollador de software enfocado en construir aplicaciones web eficientes con React, Java Spring Boot y Laravel. Apasionado por aprender constantemente y resolver problemas reales con código.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    <a
                        href="#proyectos"
                        className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-sky-500/20"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3 rounded-xl transition"
                    >
                        Contacto
                    </a>
                </div>
            </div>

            {/* Foto a la derecha */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                    src="/images/MarcosNieto.jpg"
                    alt="Marcos Matias Nieto"
                    className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-sky-400/50 shadow-xl shadow-sky-500/15"
                />
            </div>

        </section>
    );
}