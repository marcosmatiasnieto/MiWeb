export function Contact() {
    return (
        <section id="contacto" className="py-20 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-slate-400 mb-8">¿Tenés alguna consulta o propuesta de proyecto? ¡Hablemos!</p>
            <div className="flex justify-center gap-6 text-slate-300 font-medium">
                <a href="https://github.com/marcosmatiasnieto" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">GitHub</a>
                <a href="www.linkedin.com/in/nieto-marcos-matias" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">LinkedIn</a>
                <a href="mailto:marcosnieto2293@gmail.com" className="hover:text-sky-400 transition">Email</a>
            </div>
        </section>
    );
}