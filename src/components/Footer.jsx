export function Footer() {
    return (
        <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} - Desarrollado con React, Tailwind CSS & Vercel</p>
        </footer>
    );
}