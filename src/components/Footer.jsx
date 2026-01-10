import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1.2, scrollTo: id, ease: "power4.inOut" });
    };

    return (
        <footer className="bg-black-pure text-white dark:bg-gray-50 dark:text-black-pure pt-16 md:pt-24 pb-12 transition-colors">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-16 md:mb-24">
                    <div className="md:col-span-5">
                        <a href="#" className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6 block">
                            CELESTÚN<span className="text-flamingo">.</span>
                        </a>
                        <p className="text-lg md:text-xl opacity-60 mb-10 max-w-sm">
                            Redefiniendo el ecoturismo en Yucatán a través del diseño y la exclusividad.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h5 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-flamingo">Explora</h5>
                        <ul className="space-y-4 text-sm md:text-lg">
                            <li><button onClick={() => scrollToSection('#experiencia')} className="hover:translate-x-2 inline-block transition-transform hover:text-flamingo text-left">La Experiencia</button></li>
                            <li><button onClick={() => scrollToSection('#galeria')} className="hover:translate-x-2 inline-block transition-transform hover:text-flamingo text-left">Galería</button></li>
                            <li><button onClick={() => scrollToSection('#tours')} className="hover:translate-x-2 inline-block transition-transform hover:text-flamingo text-left">Tours</button></li>
                            <li><button onClick={() => scrollToSection('#reserva')} className="hover:translate-x-2 inline-block transition-transform hover:text-flamingo text-left">Contacto</button></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h5 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-flamingo">Contacto</h5>
                        <ul className="space-y-4 text-xs md:text-sm">
                            <li className="flex items-start gap-3">
                                <span className="w-4 text-flamingo mt-1">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    </svg>
                                </span>
                                <span className="opacity-60 italic font-light">Celestún, Yucatán, CP 97367.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 text-flamingo">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </span>
                                <span className="opacity-60 font-light">+52 999 548 3710</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 dark:border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.3em] opacity-40">
                    <p>© 2025 Celestún Adventures.</p>
                    <div className="flex gap-6">
                        <a href="/privacidad" className="hover:text-flamingo">Privacidad</a>
                        <a href="/cancelacion" className="hover:text-flamingo">Política de Cancelación</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
