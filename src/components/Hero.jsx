import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import heroImage from '../assets/hero-flamingos.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
    useEffect(() => {
        // Reveal Sections Logic using GSAP
        // Since sections are in different components, we can animate locally or use a global context.
        // For simplicity, we animate local elements here

        gsap.utils.toArray('.section-reveal').forEach((section) => {
            // In React, elements might remount, so simple animations on mount are safer
            gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%" // Trigger when top of element hits 90% of viewport height
                }
            });
        });

        // Scroll Capsule Animation
        gsap.to("#scroll-dot", {
            y: 12, opacity: 0, repeat: -1, duration: 1.5, ease: "power2.inOut"
        });

    }, []);

    const scrollToReserve = () => {
        gsap.to(window, { duration: 1.2, scrollTo: '#reserva', ease: "power4.inOut" });
    };

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Flamingos"
                    className="w-full h-full object-cover grayscale brightness-50 dark:grayscale-0 dark:brightness-100 opacity-60 dark:opacity-40 transition-all duration-700"
                />
            </div>

            <div className="relative z-10 text-center max-w-5xl px-6">
                <p className="text-flamingo font-bold uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block section-reveal translate-y-[40px] opacity-0">
                    Guía Local Certificado • Celestún, Yucatán
                </p>
                <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-extrabold leading-[0.85] tracking-tighter mb-10 section-reveal uppercase translate-y-[40px] opacity-0">
                    Rosa<br /><span className="font-serif italic font-light text-flamingo lowercase">Absoluto</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center section-reveal translate-y-[40px] opacity-0">
                    <button
                        onClick={scrollToReserve}
                        className="w-full md:w-auto bg-flamingo text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-flamingo-dark transition-all scale-hover text-sm"
                    >
                        Reservar Experiencia
                    </button>
                    <p className="text-xs md:text-sm md:text-left text-center max-w-xs opacity-80">
                        Vive la Reserva de la Biosfera a través de los ojos de un experto local. Seguridad certificada, rutas exclusivas y naturaleza en estado puro.
                    </p>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[7px] uppercase tracking-[0.4em] opacity-30 font-bold">Descubrir</span>
                <div className="scroll-capsule">
                    <div className="scroll-dot" id="scroll-dot"></div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
