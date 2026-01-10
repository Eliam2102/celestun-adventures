import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
        // 1. Verificación manual guardada
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        // 2. Lógica automática por hora.
        // NOTA: En este proyecto, la clase 'dark' activa el fondo BLANCO (Tema Claro).
        // El estado base (sin clase) es el fondo NEGRO (Tema Oscuro).

        const hour = new Date().getHours();
        const isNight = hour >= 19 || hour < 6;

        // Si es de noche, queremos Tema Oscuro (sin clase) -> false
        // Si es de día, queremos Tema Claro (con clase .dark) -> true
        return !isNight;
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Theme Toggle Logic
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        // Navbar Scroll Effect
        const nav = document.getElementById('main-nav');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-black-pure/95', 'dark:bg-white/95', 'backdrop-blur-md', 'py-2', 'shadow-sm');
            } else {
                nav.classList.remove('bg-black-pure/95', 'dark:bg-white/95', 'backdrop-blur-md', 'py-2', 'shadow-sm');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const handleNavigation = (target) => {
        setIsMobileMenuOpen(false);

        // Si es una ruta (empieza con /)
        if (target.startsWith('/')) {
            navigate(target);
            return;
        }

        // Si es un anchor (#)
        if (location.pathname !== '/') {
            // Si no estamos en home, vamos a home y luego scrolleamos
            navigate('/');
            setTimeout(() => {
                gsap.to(window, { duration: 1.2, scrollTo: target, ease: "power4.inOut" });
            }, 500); // Pequeño delay para asegurar que cargó home
        } else {
            // Si ya estamos en home, solo scrolleamos
            gsap.to(window, { duration: 1.2, scrollTo: target, ease: "power4.inOut" });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500" id="main-nav">
                <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
                    <button onClick={() => handleNavigation('/')} className="text-xl font-extrabold tracking-tighter text-white dark:text-black-pure transition-colors">
                        CELESTÚN ADVENTURES<span className="text-flamingo">.</span>
                    </button>

                    <div className="flex items-center gap-6 md:gap-10">
                        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90 dark:text-black-pure/90 transition-colors">
                            <button onClick={() => handleNavigation('#experiencia')} className="hover:text-flamingo transition-colors">Experiencia</button>
                            <button onClick={() => handleNavigation('#galeria')} className="hover:text-flamingo transition-colors">Galería</button>
                            <button onClick={() => handleNavigation('#tours')} className="hover:text-flamingo transition-colors">Tours</button>
                            <button onClick={() => handleNavigation('#reserva')} className="hover:text-flamingo transition-colors">Contacto</button>
                            <button onClick={() => handleNavigation('/agendar')} className="bg-flamingo text-white px-6 py-2 rounded-full hover:bg-white hover:text-flamingo transition-all">Agendar</button>
                        </div>

                        {/* Botón Tema - Visible en Desktop */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Alternar tema oscuro/claro"
                            className="hidden md:flex relative w-12 h-6 rounded-full border border-flamingo/50 hover:border-flamingo items-center px-1 transition-colors"
                        >
                            <div
                                className={`w-4 h-4 bg-flamingo rounded-full transition-transform duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${!isDark ? 'translate-x-[22px]' : 'translate-x-0'}`}
                            ></div>
                        </button>

                        {/* Botón Menú Móvil */}
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white dark:text-black-pure focus:outline-none" aria-label="Abrir menú de navegación">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay Navegación Móvil */}
            <div
                id="mobile-nav-overlay"
                className={`fixed inset-0 bg-flamingo z-[60] md:hidden flex items-center justify-center ${isMobileMenuOpen ? 'active' : ''}`}
            >
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none z-[70]" aria-label="Cerrar menú">&times;</button>
                <div className="flex flex-col gap-8 text-center text-white text-3xl font-extrabold uppercase tracking-tighter items-center">
                    <button onClick={() => handleNavigation('/')} className="mobile-link">Inicio</button>
                    <button onClick={() => handleNavigation('#experiencia')} className="mobile-link">Experiencia</button>
                    <button onClick={() => handleNavigation('#galeria')} className="mobile-link">Galería</button>
                    <button onClick={() => handleNavigation('#tours')} className="mobile-link">Tours</button>
                    <button onClick={() => handleNavigation('#reserva')} className="mobile-link">Contacto</button>
                    <button onClick={() => handleNavigation('/agendar')} className="mobile-link bg-white text-flamingo px-8 py-2 rounded-full mt-4">Agendar Ahora</button>

                    {/* Botón Tema - Móvil */}
                    <div className="mt-8 flex items-center gap-4 text-sm tracking-widest">
                        <span>MODO</span>
                        <button
                            onClick={toggleTheme}
                            aria-label="Alternar tema oscuro/claro móvil"
                            className="relative w-12 h-6 rounded-full border border-white hover:border-white/80 flex items-center px-1 transition-colors bg-black/20"
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition-transform duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${!isDark ? 'translate-x-[22px]' : 'translate-x-0'}`}
                            ></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
